export function HeroBanner({
  title,
  text,
  children
}: {
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="hero">
      <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.72)" }}>
        Internal Operations Portal
      </p>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </section>
  );
}
