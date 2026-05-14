"use server";

import { redirect } from "next/navigation";
import { BestTimeToContact, CustomerType, PreferredContactMethod, SupportRequestInput, TicketCategory } from "@/lib/types";
import { submitSupportRequest } from "@/services/ticketService";

function getRequiredString(formData: FormData, field: string) {
  return String(formData.get(field) || "").trim();
}

export async function submitTicketAction(formData: FormData) {
  const input: SupportRequestInput = {
    fullName: getRequiredString(formData, "fullName"),
    email: getRequiredString(formData, "email"),
    phone: getRequiredString(formData, "phone"),
    customerType: getRequiredString(formData, "customerType") as CustomerType,
    issueCategory: getRequiredString(formData, "issueCategory") as TicketCategory,
    deviceType: getRequiredString(formData, "deviceType"),
    issueDescription: getRequiredString(formData, "issueDescription"),
    preferredContactMethod: getRequiredString(formData, "preferredContactMethod") as PreferredContactMethod,
    bestTimeToContact: getRequiredString(formData, "bestTimeToContact") as BestTimeToContact
  };

  const requiredValues = Object.values(input);
  if (requiredValues.some((value) => !value)) {
    redirect("/submit-ticket?error=Please complete all required fields.");
  }

  try {
    const result = await submitSupportRequest(input);
    const params = new URLSearchParams({
      ticketId: result.ticketId || "",
      message: result.message,
      expectedResponse: result.expectedResponse || "",
      next1: result.nextSteps?.[0] || "",
      next2: result.nextSteps?.[1] || "",
      next3: result.nextSteps?.[2] || "",
      mode: result.usedMockService ? "mock" : "freshdesk"
    });
    redirect(`/submit-ticket/success?${params.toString()}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Please try again later.";
    redirect(`/submit-ticket?error=${encodeURIComponent(message)}`);
  }
}
