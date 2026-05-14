import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { customers, scenarios } from "@/lib/data";
import { requireUser } from "@/lib/session";

export default async function CustomerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;
  const customer = customers.find((entry) => entry.id === id);

  if (!customer) {
    notFound();
  }

  const relatedScenarios = scenarios.filter((scenario) => scenario.linkedCustomerId === customer.id);
  const duplicateMatches = customer.duplicateGroup
    ? customers.filter((entry) => entry.duplicateGroup === customer.duplicateGroup && entry.id !== customer.id)
    : [];

  return (
    <AppShell user={user} currentPath="/customers">
      <section className="hero">
        <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.72)" }}>
          Customer Detail
        </p>
        <h1>{customer.name}</h1>
        <p>
          {customer.segment} account owned by {customer.owner}. This view helps technicians connect customer data issues
          to the matching training scenario.
        </p>
      </section>

      <section className="grid-2">
        <div className="panel stack-md">
          <div className="row">
            <h2 style={{ margin: 0 }}>Record summary</h2>
            <span className={`pill ${customer.health === "at-risk" ? "danger" : customer.health === "watch" ? "warn" : "ok"}`}>
              {customer.health}
            </span>
          </div>
          <p style={{ margin: 0 }}>
            <strong>Renewal date:</strong> {customer.renewalDate}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Open issues:</strong> {customer.openIssues}
          </p>
          <div className="alert info">
            <strong>Training note:</strong> This data is intentionally seeded to help your technicians practice CRM support
            and documentation.
          </div>
          <div>
            <p className="eyebrow">Notes</p>
            <ul className="list-clean">
              {customer.notes.map((note) => (
                <li key={note} className="customer-card">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="panel stack-md">
          <h2 style={{ margin: 0 }}>Related issues</h2>
          <ul className="list-clean">
            {relatedScenarios.map((scenario) => (
              <li key={scenario.id} className="scenario-card">
                <div className="row">
                  <strong>{scenario.title}</strong>
                  <span className={`pill ${scenario.severity === "high" ? "danger" : "warn"}`}>{scenario.status}</span>
                </div>
                <p className="muted">{scenario.summary}</p>
              </li>
            ))}
          </ul>
          {duplicateMatches.length ? (
            <div className="alert warn">
              <strong>Duplicate flag:</strong> Compare this record with {duplicateMatches.map((entry) => entry.name).join(", ")}.
            </div>
          ) : null}
          <Link href="/admin-tools" className="btn">
            Open remediation tools
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
