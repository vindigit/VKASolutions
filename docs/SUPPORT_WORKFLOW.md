# Support Workflow

## Customer Flow

1. Customer visits the VKA Solutions support portal.
2. Customer submits a support request with issue details and contact preferences.
3. The server-side ticket service sends the request to Freshdesk when credentials are configured.
4. If Freshdesk credentials are not configured, the app uses the mock ticket adapter for MVP behavior.
5. Customer receives a confirmation screen with a ticket ID and next-step guidance.
6. Customer can later check ticket status using ticket number and email.

## Freshdesk Notes

- Freshdesk is the real ticketing system for live operations.
- API keys must stay server-side.
- Browser code must never contain the Freshdesk secret.
- Live status lookup is not yet implemented in MVP.

## Customer Experience Goals

- Fast form completion
- Clear confirmation messaging
- Plain-language status updates
- Professional but approachable tone
