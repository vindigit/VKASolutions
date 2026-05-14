import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { HeroBanner } from "@/components/hero-banner";
import { customers, demoUsers, scenarios, ticketTemplates } from "@/lib/data";
import { requireUser } from "@/lib/session";

export default async function DashboardPage() {
  const user = await requireUser();
  const openScenarios = scenarios.filter((scenario) => scenario.status !== "resolved");
  const blockedUsers = demoUsers.filter((entry) => entry.status === "locked" || !entry.crmAccess);

  return (
    <AppShell user={user} currentPath="/dashboard">
      <HeroBanner
        title="Operations dashboard"
        text="Monitor user access, customer issues, and training scenarios that mirror a small internal CRM support queue."
      >
        <div className="row" style={{ marginTop: 20 }}>
          <span className="pill ok">Environment: Local seeded demo</span>
          <span className="pill info">Freshdesk workflow simulated outside the app</span>
        </div>
      </HeroBanner>

      <section className="grid-3">
        <div className="stat-card">
          <p className="eyebrow">Open Scenarios</p>
          <p className="stat-value">{openScenarios.length}</p>
          <p className="muted">Current incidents and access drills for technicians.</p>
        </div>
        <div className="stat-card">
          <p className="eyebrow">Customers</p>
          <p className="stat-value">{customers.length}</p>
          <p className="muted">Seeded accounts with lifecycle and data quality issues.</p>
        </div>
        <div className="stat-card">
          <p className="eyebrow">Users Requiring Action</p>
          <p className="stat-value">{blockedUsers.length}</p>
          <p className="muted">Locked, missing access, pending, or offboarding users.</p>
        </div>
      </section>

      <section className="panel stack-md">
        <div className="row">
          <div>
            <p className="eyebrow">Scenario Queue</p>
            <h2 style={{ margin: 0 }}>Training incidents</h2>
          </div>
          <Link href="/admin-tools" className="btn-secondary">
            Open admin tools
          </Link>
        </div>
        <div className="card-grid">
          {scenarios.map((scenario) => (
            <article key={scenario.id} className="scenario-card stack-sm">
              <div className="row">
                <strong>{scenario.title}</strong>
                <span
                  className={`pill ${
                    scenario.severity === "high" ? "danger" : scenario.severity === "medium" ? "warn" : "info"
                  }`}
                >
                  {scenario.severity}
                </span>
              </div>
              <p className="muted" style={{ margin: 0 }}>
                {scenario.summary}
              </p>
              <div className="divider" />
              <p style={{ margin: 0 }}>
                <strong>Status:</strong> {scenario.status}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Focus:</strong> {scenario.trainingFocus}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-2">
        <div className="panel stack-md">
          <div>
            <p className="eyebrow">Ticket Templates</p>
            <h2 style={{ margin: 0 }}>Common help desk requests</h2>
          </div>
          <ul className="list-clean">
            {ticketTemplates.map((ticket) => (
              <li key={ticket.id} className="ticket-card">
                <div className="row">
                  <strong>{ticket.title}</strong>
                  <span className={`pill ${ticket.urgency === "high" ? "danger" : ticket.urgency === "medium" ? "warn" : "info"}`}>
                    {ticket.urgency}
                  </span>
                </div>
                <p className="muted">{ticket.summary}</p>
                <p style={{ margin: 0 }}>
                  <strong>Requested by:</strong> {ticket.requestedBy}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel stack-md">
          <div>
            <p className="eyebrow">Role Access</p>
            <h2 style={{ margin: 0 }}>Demo account states</h2>
          </div>
          <ul className="list-clean">
            {demoUsers.map((account) => (
              <li key={account.id} className="customer-card">
                <div className="row">
                  <strong>{account.name}</strong>
                  <span
                    className={`pill ${
                      account.status === "locked" || account.status === "terminated"
                        ? "danger"
                        : account.status === "pending" || !account.crmAccess
                          ? "warn"
                          : "ok"
                    }`}
                  >
                    {account.status}
                  </span>
                </div>
                <p className="muted">{account.title}</p>
                <p style={{ margin: 0 }}>
                  <strong>CRM Access:</strong> {account.crmAccess ? "Enabled" : "Missing"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AppShell>
  );
}
