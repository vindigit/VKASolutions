# AGENTS.md

## Project

VKA CRM is a fake internal CRM for VKA Solutions. It exists to support beginner IT help desk training with realistic CRM incidents and role-based troubleshooting.

## Operational Context

- Only the project owner uses GitHub.
- The two technicians do not edit code.
- Technicians use Freshdesk, the CRM web app, documentation, and remote support tools.
- The app should behave like a believable internal business system, not a toy demo.

## Engineering Rules

- Use seeded local data only.
- Do not introduce real authentication.
- Do not require paid services.
- Keep deployment simple.
- Prefer straightforward UI patterns over unnecessary complexity.
- Every feature should reinforce a help desk training scenario.

## Current App Scope

- Fake login selector
- Dashboard
- Customer records
- Customer detail records
- Role-based access simulation
- Issue reporting form
- IT admin tools simulation

## Training Scenarios

- CEO account locked
- Sales user missing CRM access
- Duplicate customer record
- Export button error
- Password reset request
- New employee onboarding
- Terminated employee access removal
