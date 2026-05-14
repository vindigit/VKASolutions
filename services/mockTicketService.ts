import { mockTicketStatuses } from "@/data/mockTicketStatuses";
import { SupportRequestInput, TicketLookupInput, TicketStatusRecord, TicketSubmissionResult } from "@/lib/types";

export async function createMockTicket(input: SupportRequestInput): Promise<TicketSubmissionResult> {
  if (input.issueDescription.toLowerCase().includes("force-error")) {
    throw new Error("Mock submission failure requested.");
  }

  const seed = `${input.fullName}${input.email}${input.issueCategory}`.length;
  const ticketId = `VKA-${10000 + seed}`;

  return {
    ok: true,
    ticketId,
    message: "Your request has been submitted.",
    nextSteps: [
      "A technician will review the information you sent.",
      "We may contact you for screenshots, account details, or a time for remote support.",
      "For the fastest update, keep your ticket ID handy when you contact us."
    ],
    expectedResponse: "We usually respond within one business day, and urgent access issues may be addressed sooner.",
    usedMockService: true
  };
}

export async function lookupMockTicket(input: TicketLookupInput): Promise<TicketStatusRecord | null> {
  const normalizedTicketId = input.ticketId.trim().toUpperCase();
  const normalizedEmail = input.email.trim().toLowerCase();

  return (
    mockTicketStatuses.find(
      (record) => record.ticketId.toUpperCase() === normalizedTicketId && record.email.toLowerCase() === normalizedEmail
    ) ?? null
  );
}
