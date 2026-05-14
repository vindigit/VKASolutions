import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { LogoMark } from "@/components/logo-mark";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="shell page-stack">{children}</main>
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="panel stack-md">
            <LogoMark compact />
            <h2 style={{ marginTop: 0 }}>Support for homes and small businesses</h2>
            <p className="muted">
              Submit a ticket for the fastest response, or reach out if you need help deciding the best next step.
            </p>
          </div>
          <div className="panel stack-sm">
            <p className="eyebrow">Quick Links</p>
            <Link href="/submit-ticket">Submit a Support Request</Link>
            <Link href="/ticket-status">Check Ticket Status</Link>
            <Link href="/contact">Contact VKA Solutions</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
