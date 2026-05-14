import { SiteLayout } from "@/components/site-layout";
import { TicketStatusLookup } from "@/components/ticket-status-lookup";
import { lookupTicketStatus } from "@/services/ticketService";

export default async function TicketStatusPage({
  searchParams
}: {
  searchParams: Promise<{ ticketId?: string; email?: string }>;
}) {
  const params = await searchParams;

  let error: string | undefined;
  let result = null;

  if (params.ticketId || params.email) {
    if (!params.ticketId || !params.email) {
      error = "Please enter both your ticket number and email address.";
    } else {
      result = await lookupTicketStatus({
        ticketId: params.ticketId,
        email: params.email
      });

      if (!result) {
        error = "We could not find a matching ticket with that ticket number and email address.";
      }
    }
  }

  return (
    <SiteLayout>
      <section className="hero page-hero">
        <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.78)" }}>
          Ticket Status
        </p>
        <h1>Check the latest update on your support request.</h1>
        <p>Use the ticket number from your confirmation message and the same email address used when you submitted it.</p>
      </section>

      <TicketStatusLookup result={result} error={error} />
    </SiteLayout>
  );
}
