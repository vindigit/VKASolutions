# AGENTS.md

## Project

VKA Solutions Support Portal is a customer-facing support app for a hypothetical home and small-business IT services company.

## Product Direction

- Public-facing customer portal
- Freshdesk is the real ticketing system
- The app is the customer front door
- No customer login required for MVP
- Keep the language practical and non-corporate

## Engineering Rules

- Keep Freshdesk secrets on the server only
- Use a mock ticket adapter when backend credentials are not configured
- Keep the UI responsive and easy to deploy
- Avoid unnecessary complexity or paid dependencies
- Use plain customer-friendly language across the portal

## Current Scope

- Home page
- Submit Ticket form
- Services page
- Knowledge Base page
- Ticket Status lookup
- Contact page

## Integration Notes

- Ticket submission should go through the server-side service layer
- Ticket status lookup is mock-based for MVP
- Real Freshdesk status lookup can be added later through a safe backend flow
