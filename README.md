# VKA Solutions Support Portal

VKA Solutions Support Portal is a customer-facing Next.js app for a small home and small-business IT support company. It gives customers a simple front door to submit support requests, review services, browse basic help articles, and check mock ticket status while Freshdesk remains the real ticketing system of record.

## Purpose

This portal is designed to feel like something a real customer could use for:

- Wi-Fi and internet issues
- Email and login problems
- Printer and scanner support
- Mobile device and new phone setup
- Smart TV and streaming app help
- Microsoft 365 and Google Workspace questions
- CRM and spreadsheet import issues
- Basic security and MFA help

## Stack

- Next.js App Router
- React
- TypeScript
- Server-side service layer for ticket submission
- Mock Freshdesk adapter by default

## Routes

- `/` - Home
- `/submit-ticket` - Submit a support request
- `/submit-ticket/success` - Submission confirmation
- `/services` - Services
- `/knowledge-base` - Knowledge base
- `/ticket-status` - Check ticket status
- `/contact` - Contact

## Local Run

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

Then open [http://localhost:3000](http://localhost:3000).

## Freshdesk Integration

The app uses a server-side integration layer so secrets never appear in browser code.

If `FRESHDESK_DOMAIN` and `FRESHDESK_API_KEY` are missing, the app automatically falls back to a mock ticket service for MVP use.

Server-only environment variables:

- `FRESHDESK_DOMAIN`
- `FRESHDESK_API_KEY`
- `FRESHDESK_DEFAULT_PRIORITY`
- `FRESHDESK_DEFAULT_STATUS`

Notes:

- Do not use `NEXT_PUBLIC_` for Freshdesk secrets.
- Live Freshdesk submission should run only on the server.
- Ticket status lookup is still mocked for MVP.

## Validation Commands

- `npm run typecheck`
- `npm run build`
- `npm run lint` prints the current repo policy because ESLint is not configured in this MVP

## Mock Ticket Demo

Use these example lookups on the ticket status page:

- `VKA-10027` / `sandra@example.com`
- `VKA-10028` / `owner@northfieldbooks.com`
- `VKA-10029` / `jared@example.com`

To test the failed submission path in MVP mode, include `force-error` anywhere in the issue description.

## Documentation

- [AGENTS.md](/C:/Users/valexander/VKASolutions/AGENTS.md)
- [PROJECT_BRIEF.md](/C:/Users/valexander/VKASolutions/docs/PROJECT_BRIEF.md)
- [SUPPORT_WORKFLOW.md](/C:/Users/valexander/VKASolutions/docs/SUPPORT_WORKFLOW.md)
- [RELEASE_NOTES.md](/C:/Users/valexander/VKASolutions/docs/RELEASE_NOTES.md)
