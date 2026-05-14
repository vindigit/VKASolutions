# Release Notes

## 0.2.0 - 2026-05-13

Customer portal rewrite for VKA Solutions.

### Added

- Public home page
- Services page
- Knowledge Base page
- Ticket submission flow
- Ticket confirmation page
- Ticket status lookup page
- Contact page
- Server-side Freshdesk service layer
- Mock ticket adapter fallback

### Removed

- Fake login
- Internal CRM dashboard
- Internal customer records
- IT admin tools
- Role-based access simulation

### Notes

- Freshdesk submission is server-safe and env-driven
- Ticket status remains mock-based for MVP
