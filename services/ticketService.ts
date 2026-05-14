import { createFreshdeskTicket, canUseFreshdesk, lookupFreshdeskTicket } from "@/services/freshdeskService";
import { createMockTicket, lookupMockTicket } from "@/services/mockTicketService";
import { SupportRequestInput, TicketLookupInput, TicketStatusRecord, TicketSubmissionResult } from "@/lib/types";

export async function submitSupportRequest(input: SupportRequestInput): Promise<TicketSubmissionResult> {
  if (canUseFreshdesk()) {
    return createFreshdeskTicket(input);
  }

  return createMockTicket(input);
}

export async function lookupTicketStatus(input: TicketLookupInput): Promise<TicketStatusRecord | null> {
  if (canUseFreshdesk()) {
    const freshdeskResult = await lookupFreshdeskTicket(input);
    if (freshdeskResult) {
      return freshdeskResult;
    }
  }

  return lookupMockTicket(input);
}
