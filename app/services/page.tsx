import { SiteLayout } from "@/components/site-layout";
import { serviceSections } from "@/data/services";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <section className="hero page-hero">
        <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.78)" }}>
          Services
        </p>
        <h1>Support services for home and small-business technology.</h1>
        <p>
          From Wi-Fi and streaming apps to office printers and Microsoft 365, VKA Solutions focuses on the issues that
          slow people down every day.
        </p>
      </section>

      <section className="stack-md">
        {serviceSections.map((section) => (
          <article key={section.title} className="panel stack-md">
            <div className="section-head">
              <p className="eyebrow">{section.title}</p>
              <h2>{section.title}</h2>
              <p className="muted">{section.description}</p>
            </div>
            <div className="card-grid">
              {section.items.map((item) => (
                <div key={item} className="feature-card">
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
