import { FreshdeskTicketPayload, SupportRequestInput, TicketLookupInput, TicketStatusRecord, TicketSubmissionResult } from "@/lib/types";

export function canUseFreshdesk() {
  return Boolean(process.env.FRESHDESK_DOMAIN && process.env.FRESHDESK_API_KEY);
}

export function mapSupportRequestToFreshdeskPayload(input: SupportRequestInput): FreshdeskTicketPayload {
  const supportType = input.customerType === "Home" ? "Home Support" : "Business Support";
  const description = [
    `Customer type: ${input.customerType}`,
    `Issue category: ${input.issueCategory}`,
    `Device type: ${input.deviceType}`,
    `Preferred contact method: ${input.preferredContactMethod}`,
    `Best time to contact: ${input.bestTimeToContact}`,
    `Phone: ${input.phone}`,
    "",
    input.issueDescription
  ].join("\n");

  return {
    name: input.fullName,
    email: input.email,
    phone: input.phone,
    subject: `${supportType} - ${input.issueCategory} - ${input.fullName}`,
    description,
    priority: Number(process.env.FRESHDESK_DEFAULT_PRIORITY || 1),
    status: Number(process.env.FRESHDESK_DEFAULT_STATUS || 2),
    custom_fields: {
      customer_type: input.customerType,
      issue_category: input.issueCategory,
      device_type: input.deviceType,
      preferred_contact_method: input.preferredContactMethod,
      best_time_to_contact: input.bestTimeToContact
    }
  };
}

export async function createFreshdeskTicket(input: SupportRequestInput): Promise<TicketSubmissionResult> {
  const domain = process.env.FRESHDESK_DOMAIN;
  const apiKey = process.env.FRESHDESK_API_KEY;

  if (!domain || !apiKey) {
    throw new Error("Freshdesk credentials are not configured.");
  }

  const payload = mapSupportRequestToFreshdeskPayload(input);
  const response = await fetch(`https://${domain}.freshdesk.com/api/v2/tickets`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${apiKey}:X`).toString("base64")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Freshdesk ticket creation failed with status ${response.status}.`);
  }

  const result = (await response.json()) as { id: number };

  return {
    ok: true,
    ticketId: `FD-${result.id}`,
    message: "Your request has been submitted.",
    nextSteps: [
      "We will review the issue details you provided.",
      "If we need more information, we will contact you using your preferred method.",
      "Please keep an eye on your email or phone for updates."
    ],
    expectedResponse: "Most requests receive a response within one business day.",
    usedMockService: false
  };
}

export async function lookupFreshdeskTicket(_: TicketLookupInput): Promise<TicketStatusRecord | null> {
  return null;
}

// TODO: Expand lookupFreshdeskTicket when a safe server-side Freshdesk status flow is available.
