import { AppShell } from "@/components/app-shell";
import { HeroBanner } from "@/components/hero-banner";
import { adminTools, demoUsers } from "@/lib/data";
import { requireUser } from "@/lib/session";

export default async function AdminToolsPage() {
  const user = await requireUser();
  const canAdmin = user.role === "it_admin";

  return (
    <AppShell user={user} currentPath="/admin-tools">
      <HeroBanner
        title="IT admin tools"
        text="Practice support-only and admin-only actions for access recovery, provisioning, duplicate cleanup, and offboarding control."
      >
        <div style={{ marginTop: 18 }}>
          <span className={`pill ${canAdmin ? "ok" : "warn"}`}>
            {canAdmin ? "Admin actions available" : "Read-only simulation for non-admin role"}
          </span>
        </div>
      </HeroBanner>

      <section className="grid-2">
        <div className="panel stack-md">
          <div>
            <p className="eyebrow">Available tools</p>
            <h2 style={{ margin: 0 }}>Role-based access simulation</h2>
          </div>
          <div className="card-grid">
            {adminTools.map((tool) => {
              const allowed = tool.allowedRoles.includes(user.role);
              return (
                <article key={tool.id} className="tool-card stack-sm">
                  <div className="row">
                    <strong>{tool.title}</strong>
                    <span className={`pill ${allowed ? "ok" : "warn"}`}>{allowed ? "Allowed" : "Restricted"}</span>
                  </div>
                  <p className="muted" style={{ margin: 0 }}>
                    {tool.description}
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Impact:</strong> {tool.impact}
                  </p>
                  <button type="button" className={allowed ? "btn" : "btn-secondary"}>
                    {allowed ? "Run simulation" : "View restrictions"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <div className="panel stack-md">
          <div>
            <p className="eyebrow">User administration queue</p>
            <h2 style={{ margin: 0 }}>Accounts needing attention</h2>
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
                <p className="muted" style={{ margin: 0 }}>
                  {account.email}
                </p>
                <p style={{ margin: "8px 0 0" }}>
                  <strong>CRM Access:</strong> {account.crmAccess ? "Enabled" : "Missing"}
                </p>
                <p style={{ margin: "8px 0 0" }}>
                  <strong>Playbook notes:</strong> {account.notes[0]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AppShell>
  );
}
