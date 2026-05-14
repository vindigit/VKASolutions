import Link from "next/link";
import { logoutAction } from "@/app/actions";
import { User } from "@/lib/types";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/customers", label: "Customers" },
  { href: "/report-issue", label: "Report IT Issue" },
  { href: "/admin-tools", label: "IT Admin Tools" }
];

export function AppShell({
  user,
  currentPath,
  children
}: {
  user: User;
  currentPath: string;
  children: React.ReactNode;
}) {
  return (
    <div className="shell app-grid">
      <aside className="sidebar">
        <span className="brand-tag">VKA Solutions</span>
        <h1>VKA CRM</h1>
        <p>Internal customer operations portal used for IT help desk training and scenario practice.</p>

        <div className="panel" style={{ padding: 16, borderRadius: 18 }}>
          <p className="eyebrow">Signed In</p>
          <strong>{user.name}</strong>
          <p className="muted" style={{ margin: "6px 0 0" }}>
            {user.title}
          </p>
          <div style={{ marginTop: 10 }}>
            <span className={`pill ${user.crmAccess ? "ok" : "warn"}`}>{user.role}</span>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${currentPath === item.href ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <form action={logoutAction}>
          <button type="submit" className="btn-secondary" style={{ width: "100%" }}>
            Sign out
          </button>
        </form>
      </aside>

      <main className="main-stack">{children}</main>
    </div>
  );
}
