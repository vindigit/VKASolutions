import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { HeroBanner } from "@/components/hero-banner";
import { customers } from "@/lib/data";
import { requireUser } from "@/lib/session";

export default async function CustomersPage() {
  const user = await requireUser();

  return (
    <AppShell user={user} currentPath="/customers">
      <HeroBanner
        title="Customer records"
        text="Review seeded customer data, including duplicate account problems and application issues assigned to support training."
      />

      <section className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Segment</th>
              <th>Owner</th>
              <th>Health</th>
              <th>Issues</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <strong>{customer.name}</strong>
                  {customer.duplicateGroup ? <p className="muted">Potential duplicate record</p> : null}
                </td>
                <td>{customer.segment}</td>
                <td>{customer.owner}</td>
                <td>{customer.health}</td>
                <td>{customer.openIssues}</td>
                <td>
                  <Link className="btn-secondary" href={`/customers/${customer.id}`}>
                    Open record
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppShell>
  );
}
