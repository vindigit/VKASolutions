import Link from "next/link";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { SiteLayout } from "@/components/site-layout";
import { homeSupportAreas } from "@/data/services";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />

      <section className="section stack-md">
        <div className="section-head">
          <p className="eyebrow">How We Help</p>
          <h2>Support built for real-world tech problems</h2>
          <p className="muted">
            Whether you need home tech help or practical support for a small business, VKA Solutions keeps the process
            simple and easy to understand.
          </p>
        </div>
        <div className="card-grid">
          {homeSupportAreas.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section grid-2">
        <div className="panel stack-md">
          <p className="eyebrow">Common Issues</p>
          <h2 style={{ margin: 0 }}>What customers usually need help with</h2>
          <ul className="list-clean">
            <li className="feature-card">Wi-Fi and internet problems</li>
            <li className="feature-card">Phone and tablet setup</li>
            <li className="feature-card">Email and Microsoft 365 access</li>
            <li className="feature-card">Printer, scanner, and device setup</li>
          </ul>
        </div>
        <div className="panel stack-md">
          <p className="eyebrow">Why VKA</p>
          <h2 style={{ margin: 0 }}>Support that feels local and straightforward</h2>
          <p className="muted" style={{ margin: 0 }}>
            VKA Solutions is built for everyday support requests, not enterprise process overhead. Submit a ticket,
            get a clear next step, and keep your ticket number for follow-up.
          </p>
          <div className="brand-stamp">
            <div className="brand-stamp-mark">VKA</div>
            <div className="brand-stamp-copy">
              <strong>Customer support portal</strong>
              <span>Built for homes, families, and small businesses.</span>
            </div>
          </div>
          <div className="cta-row">
            <Link href="/submit-ticket" className="btn">
              Submit a Support Request
            </Link>
            <Link href="/ticket-status" className="btn-secondary">
              Check Ticket Status
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
