import { contactMethods, contactTimes, customerTypes, ticketCategories } from "@/data/ticketCategories";

export function TicketForm({
  error,
  action
}: {
  error?: string;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="panel stack-md">
      <div>
        <p className="eyebrow">Support Request</p>
        <h2 style={{ margin: "0 0 8px" }}>Tell us what you need help with</h2>
        <p className="muted" style={{ margin: 0 }}>
          Fill out the form below and we will use the details to start your ticket.
        </p>
      </div>

      {error ? (
        <div className="alert warn">
          <strong>We could not submit your request:</strong> {error}
        </div>
      ) : null}

      <div className="grid-2">
        <label className="field">
          <span>Full name</span>
          <input name="fullName" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" required />
        </label>
      </div>

      <div className="grid-2">
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" required />
        </label>
        <label className="field">
          <span>Customer type</span>
          <select name="customerType" defaultValue={customerTypes[0]} required>
            {customerTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid-2">
        <label className="field">
          <span>Issue category</span>
          <select name="issueCategory" defaultValue={ticketCategories[0]} required>
            {ticketCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Device type</span>
          <input name="deviceType" placeholder="Laptop, iPhone, printer, smart TV, router..." required />
        </label>
      </div>

      <label className="field">
        <span>Issue description</span>
        <textarea
          name="issueDescription"
          required
          placeholder="Tell us what is happening, what you have already tried, and any error messages you see."
        />
      </label>

      <div className="grid-2">
        <label className="field">
          <span>Preferred contact method</span>
          <select name="preferredContactMethod" defaultValue={contactMethods[0]} required>
            {contactMethods.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Best time to contact</span>
          <select name="bestTimeToContact" defaultValue={contactTimes[0]} required>
            {contactTimes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="alert info">
        Ticket requests are submitted through a server-side service layer. Freshdesk credentials stay off the client.
      </div>

      <button className="btn" type="submit">
        Submit Request
      </button>
    </form>
  );
}
