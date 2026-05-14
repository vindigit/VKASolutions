import { TicketStatusRecord } from "@/lib/types";

export const mockTicketStatuses: TicketStatusRecord[] = [
  {
    ticketId: "VKA-10027",
    email: "sandra@example.com",
    subject: "Home Support - Wi-Fi / Internet - Sandra Lopez",
    status: "Open",
    updatedAt: "2026-05-13 09:10 AM",
    note: "We received your request and will follow up during your preferred contact window."
  },
  {
    ticketId: "VKA-10028",
    email: "owner@northfieldbooks.com",
    subject: "Business Support - Printer / Scanner - Northfield Books",
    status: "In Progress",
    updatedAt: "2026-05-13 11:45 AM",
    note: "A technician is reviewing the printer and network details you provided."
  },
  {
    ticketId: "VKA-10029",
    email: "jared@example.com",
    subject: "Home Support - Smart TV / Streaming - Jared Hill",
    status: "Waiting on Customer",
    updatedAt: "2026-05-12 04:20 PM",
    note: "We need a photo of the TV model number to continue."
  },
  {
    ticketId: "VKA-10030",
    email: "admin@brooksidevet.com",
    subject: "Business Support - Microsoft 365 / Google Workspace - Brookside Vet",
    status: "Resolved",
    updatedAt: "2026-05-12 02:05 PM",
    note: "Mailbox access has been restored and confirmed."
  },
  {
    ticketId: "VKA-10031",
    email: "maria@example.com",
    subject: "Home Support - Mobile Device - Maria Torres",
    status: "Closed",
    updatedAt: "2026-05-10 10:15 AM",
    note: "Your phone setup request was completed successfully."
  }
];
