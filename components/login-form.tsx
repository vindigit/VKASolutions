import { loginAction } from "@/app/actions";
import { demoUsers } from "@/lib/data";

export function LoginForm({ error }: { error?: string }) {
  return (
    <form action={loginAction} className="panel stack-md">
      <div>
        <p className="eyebrow">Fake Login</p>
        <h2 style={{ margin: "0 0 8px" }}>Choose a demo user</h2>
        <p className="muted" style={{ margin: 0 }}>
          No real authentication is used. Select a seeded account to simulate role-based access.
        </p>
      </div>

      <label className="field">
        <span>User account</span>
        <select name="userId" defaultValue={demoUsers[3]?.id} required>
          {demoUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} · {user.title}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Password</span>
        <input type="password" value="demo-password" readOnly />
      </label>

      {error ? (
        <div className="alert warn">
          <strong>Login simulation error:</strong> {error}
        </div>
      ) : null}

      <button className="btn" type="submit">
        Enter VKA CRM
      </button>
    </form>
  );
}
