export type CustomerType = "Home" | "Small Business";

export type TicketCategory =
  | "Wi-Fi / Internet"
  | "Email / Login"
  | "Printer / Scanner"
  | "Mobile Device"
  | "Smart TV / Streaming"
  | "Microsoft 365 / Google Workspace"
  | "CRM / Spreadsheet Import"
  | "Security / MFA"
  | "Hardware Setup"
  | "Other";

export type PreferredContactMethod = "Phone" | "Email" | "Text";

export type BestTimeToContact = "Morning" | "Afternoon" | "Evening";

export type TicketStatus = "Open" | "In Progress" | "Waiting on Customer" | "Resolved" | "Closed";

export type SupportArea = {
  title: string;
  description: string;
};

export type ServiceSection = {
  title: string;
  description: string;
  items: string[];
};

export type KnowledgeBaseArticle = {
  slug: string;
  title: string;
  summary: string;
};

export type SupportRequestInput = {
  fullName: string;
  email: string;
  phone: string;
  customerType: CustomerType;
  issueCategory: TicketCategory;
  deviceType: string;
  issueDescription: string;
  preferredContactMethod: PreferredContactMethod;
  bestTimeToContact: BestTimeToContact;
};

export type TicketSubmissionResult = {
  ok: boolean;
  ticketId?: string;
  message: string;
  nextSteps?: string[];
  expectedResponse?: string;
  usedMockService: boolean;
};

export type TicketLookupInput = {
  ticketId: string;
  email: string;
};

export type TicketStatusRecord = {
  ticketId: string;
  email: string;
  subject: string;
  status: TicketStatus;
  updatedAt: string;
  note: string;
};

export type FreshdeskTicketPayload = {
  name: string;
  email: string;
  subject: string;
  description: string;
  priority: number;
  status: number;
  phone?: string;
  custom_fields?: Record<string, string>;
};
