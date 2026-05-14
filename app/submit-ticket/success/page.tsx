import Link from "next/link";
import Image from "next/image";
import { SiteLayout } from "@/components/site-layout";

export default async function SubmitTicketSuccessPage({
  searchParams
}: {
  searchParams: Promise<{
    ticketId?: string;
    message?: string;
    expectedResponse?: string;
    next1?: string;
    next2?: string;
    next3?: string;
    mode?: string;
  }>;
}) {
  const params = await searchParams;
  const nextSteps = [params.next1, params.next2, params.next3].filter(Boolean);

  return (
    <SiteLayout>
      <section className="panel stack-md">
        <div className="success-header">
          <div className="success-logo-frame">
            <Image src="/vka-logo-monogram.png" alt="VKA Solutions logo" width={72} height={72} className="success-logo" />
          </div>
          <div className="stack-sm" style={{ gap: 6 }}>
            <p className="eyebrow">Submission Complete</p>
            <h1 style={{ margin: 0 }}>Your request has been submitted</h1>
          </div>
        </div>
        <p className="muted" style={{ margin: 0 }}>
          {params.message || "We received your support request."}
        </p>
        <div className="success-card">
          <p style={{ margin: 0 }}>
            <strong>Ticket ID:</strong> {params.ticketId || "Pending"}
          </p>
          <p style={{ margin: "10px 0 0" }}>
            <strong>Expected response:</strong>{" "}
            {params.expectedResponse || "A technician will follow up as soon as possible."}
          </p>
          <p style={{ margin: "10px 0 0" }}>
            <strong>Request routing:</strong> {params.mode === "freshdesk" ? "Freshdesk service" : "Mock service layer"}
          </p>
        </div>
        <div className="stack-sm">
          <h2 style={{ margin: 0 }}>Next steps</h2>
          <ul className="list-clean">
            {nextSteps.map((step) => (
              <li key={step} className="feature-card">
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-row">
          <Link href="/ticket-status" className="btn">
            Check Ticket Status
          </Link>
          <Link href="/services" className="btn-secondary">
            View Services
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
