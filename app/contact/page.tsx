import Link from "next/link";
import Image from "next/image";
import { SiteLayout } from "@/components/site-layout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="hero page-hero">
        <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.78)" }}>
          Contact
        </p>
        <h1>Reach VKA Solutions for support help and scheduling.</h1>
        <p>For the fastest response, submit a ticket first so your issue details are captured clearly.</p>
      </section>

      <section className="grid-2">
        <div className="panel stack-md">
          <div className="contact-brand-row">
            <div className="contact-logo-frame">
              <Image src="/vka-logo-monogram.png" alt="VKA Solutions logo" width={64} height={64} className="contact-logo" />
            </div>
            <div>
              <p className="eyebrow">Support Hours</p>
              <h2 style={{ margin: 0 }}>When support is available</h2>
            </div>
          </div>
          <p style={{ margin: 0 }}>
            Monday through Friday
            <br />
            8:30 AM to 5:30 PM
          </p>
          <p className="muted" style={{ margin: 0 }}>
            Remote support availability depends on the issue type and scheduling needs.
          </p>
        </div>

        <div className="panel stack-md">
          <p className="eyebrow">Service Area</p>
          <h2 style={{ margin: 0 }}>How VKA Solutions works</h2>
          <p style={{ margin: 0 }}>
            Home and small-business support with remote troubleshooting for many common issues and guided setup help for
            devices, apps, and account problems.
          </p>
          <p className="muted" style={{ margin: 0 }}>
            Submit a ticket for fastest response.
          </p>
          <Link href="/submit-ticket" className="btn">
            Submit a Support Request
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
