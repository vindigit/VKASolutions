import { SupportArea } from "@/lib/types";

export function ServiceCard({ service }: { service: SupportArea }) {
  return (
    <article className="feature-card stack-sm">
      <h3 style={{ margin: 0 }}>{service.title}</h3>
      <p className="muted" style={{ margin: 0 }}>
        {service.description}
      </p>
    </article>
  );
}
