import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero hero-home">
      <div className="hero-copy">
        <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.78)" }}>
          Customer Support Portal
        </p>
        <h1>Fast, friendly IT support for homes and small businesses.</h1>
        <p>
          VKA Solutions helps with Wi-Fi issues, printers, new devices, streaming apps, Microsoft 365, email problems,
          and other everyday tech headaches.
        </p>
        <p className="muted">Practical tech support without the corporate runaround.</p>
        <div className="cta-row">
          <Link href="/submit-ticket" className="btn">
            Submit a Support Request
          </Link>
          <Link href="/services" className="btn-secondary">
            View Services
          </Link>
          <Link href="/ticket-status" className="btn-secondary">
            Check Ticket Status
          </Link>
        </div>
      </div>
      <div className="hero-panel">
        <div className="hero-brand-block">
          <div className="hero-logo-frame">
            <Image
              src="/vka-logo-monogram.png"
              alt="VKA Solutions monogram"
              width={180}
              height={180}
              className="hero-logo"
              priority
            />
          </div>
          <div className="hero-brand-copy">
            <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.78)" }}>
              VKA Solutions
            </p>
            <p className="hero-brand-text">Clear communication, practical troubleshooting, and support that feels personal.</p>
          </div>
        </div>
        <div className="divider hero-divider" />
        <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.78)" }}>
          Common Requests
        </p>
        <ul className="list-clean">
          <li className="hero-list-item">Wi-Fi and internet problems</li>
          <li className="hero-list-item">Printer and scanner setup</li>
          <li className="hero-list-item">Email and login issues</li>
          <li className="hero-list-item">New phone or device setup</li>
        </ul>
      </div>
    </section>
  );
}
