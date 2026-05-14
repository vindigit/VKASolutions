export function TicketStatusLookup({
  result,
  error
}: {
  result?: {
    ticketId: string;
    subject: string;
    status: string;
    updatedAt: string;
    note: string;
  } | null;
  error?: string;
}) {
  return (
    <div className="grid-2">
      <form action="/ticket-status" method="GET" className="panel stack-md">
        <div>
          <p className="eyebrow">Status Lookup</p>
          <h2 style={{ margin: 0 }}>Check your ticket</h2>
        </div>
        <label className="field">
          <span>Ticket number</span>
          <input name="ticketId" placeholder="VKA-10027" required />
        </label>
        <label className="field">
          <span>Email address</span>
          <input name="email" type="email" required />
        </label>
        <button type="submit" className="btn">
          Check Status
        </button>
      </form>

      <section className="panel stack-md">
        <div>
          <p className="eyebrow">Result</p>
          <h2 style={{ margin: 0 }}>Ticket details</h2>
        </div>
        {error ? (
          <div className="alert warn">
            <strong>Lookup problem:</strong> {error}
          </div>
        ) : null}
        {result ? (
          <div className="stack-sm">
            <p style={{ margin: 0 }}>
              <strong>Ticket ID:</strong> {result.ticketId}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Subject:</strong> {result.subject}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Status:</strong> {result.status}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Last updated:</strong> {result.updatedAt}
            </p>
            <div className="alert info">{result.note}</div>
          </div>
        ) : (
          <div className="alert info">
            Enter your ticket number and email address to see the current ticket status.
          </div>
        )}
      </section>
    </div>
  );
}
