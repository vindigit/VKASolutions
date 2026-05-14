import { AppShell } from "@/components/app-shell";
import { HeroBanner } from "@/components/hero-banner";
import { scenarios } from "@/lib/data";
import { requireUser } from "@/lib/session";

export default async function ReportIssuePage() {
  const user = await requireUser();

  return (
    <AppShell user={user} currentPath="/report-issue">
      <HeroBanner
        title="Report IT issue"
        text="Use this form to simulate internal ticket creation before the work is tracked in Freshdesk or another support workflow."
      />

      <section className="grid-2">
        <form className="panel stack-md">
          <div>
            <p className="eyebrow">New incident</p>
            <h2 style={{ margin: 0 }}>Submit a support request</h2>
          </div>
          <label className="field">
            <span>Issue title</span>
            <input defaultValue="CRM export failed for Northwind Fiber" />
          </label>
          <label className="field">
            <span>Category</span>
            <select defaultValue="application">
              <option value="access">Access</option>
              <option value="identity">Identity</option>
              <option value="application">Application</option>
              <option value="data">Data quality</option>
              <option value="onboarding">Onboarding</option>
              <option value="offboarding">Offboarding</option>
            </select>
          </label>
          <label className="field">
            <span>Urgency</span>
            <select defaultValue="medium">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <label className="field">
            <span>Description</span>
            <textarea defaultValue="User clicked Export CSV and received a generic error banner. Reproduced on the customer summary page." />
          </label>
          <label className="field">
            <span>Requested by</span>
            <input defaultValue={user.email} />
          </label>
          <div className="alert info">
            This form is intentionally local-only. Submissions are not persisted and no external service is required.
          </div>
          <button type="button" className="btn">
            Save simulated ticket
          </button>
        </form>

        <section className="panel stack-md">
          <div>
            <p className="eyebrow">Scenario library</p>
            <h2 style={{ margin: 0 }}>Suggested training issues</h2>
          </div>
          <ul className="list-clean">
            {scenarios.map((scenario) => (
              <li key={scenario.id} className="scenario-card">
                <div className="row">
                  <strong>{scenario.title}</strong>
                  <span className={`pill ${scenario.severity === "high" ? "danger" : scenario.severity === "medium" ? "warn" : "info"}`}>
                    {scenario.severity}
                  </span>
                </div>
                <p className="muted">{scenario.trainingFocus}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </AppShell>
  );
}
