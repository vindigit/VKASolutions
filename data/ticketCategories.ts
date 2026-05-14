import { TicketCategory } from "@/lib/types";

export const ticketCategories: TicketCategory[] = [
  "Wi-Fi / Internet",
  "Email / Login",
  "Printer / Scanner",
  "Mobile Device",
  "Smart TV / Streaming",
  "Microsoft 365 / Google Workspace",
  "CRM / Spreadsheet Import",
  "Security / MFA",
  "Hardware Setup",
  "Other"
];

export const customerTypes = ["Home", "Small Business"] as const;

export const contactMethods = ["Phone", "Email", "Text"] as const;

export const contactTimes = ["Morning", "Afternoon", "Evening"] as const;
