import { redirect } from "next/navigation";
import { LoginForm } from "@/components/login-form";
import { demoUsers, scenarios } from "@/lib/data";
import { getCurrentUser } from "@/lib/session";

export default async function LoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const user = await getCurrentUser();
  if (user) {
    redirect("/dashboard");
  }

  const params = await searchParams;

  return (
    <div className="login-wrap">
      <div className="login-card">
        <section className="hero">
          <span className="brand-tag" style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
            VKA Solutions
          </span>
          <h1>CRM training environment for realistic IT support work.</h1>
          <p>
            This app simulates internal access issues, customer record problems, onboarding tasks, and offboarding
            errors using seeded local data only.
          </p>
          <div className="grid-2">
            <div className="stat-card" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.18)" }}>
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.78)" }}>
                Demo Users
              </p>
              <p className="stat-value">{demoUsers.length}</p>
            </div>
            <div className="stat-card" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.18)" }}>
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.78)" }}>
                Training Scenarios
              </p>
              <p className="stat-value">{scenarios.length}</p>
            </div>
          </div>
        </section>

        <LoginForm error={params.error} />
      </div>
    </div>
  );
}
