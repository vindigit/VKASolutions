import { TicketForm } from "@/components/ticket-form";
import { SiteLayout } from "@/components/site-layout";
import { submitTicketAction } from "@/app/actions";

export default async function SubmitTicketPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <SiteLayout>
      <section className="hero page-hero">
        <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.78)" }}>
          Submit Ticket
        </p>
        <h1>Tell us what is going wrong and how to reach you.</h1>
        <p>
          The more detail you include, the faster we can understand the issue and decide whether remote help or a
          follow-up is needed.
        </p>
      </section>

      <TicketForm error={params.error} action={submitTicketAction} />
    </SiteLayout>
  );
}
