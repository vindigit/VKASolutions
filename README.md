# VKA CRM

VKA CRM is a simple Next.js training app for the fake company VKA Solutions. It is designed to simulate realistic internal IT support work for help desk technicians using seeded local data only.

## Purpose

This project gives your two brothers a safe environment to practice:

- Account lockouts
- Access restoration
- Duplicate customer cleanup
- App error triage
- Password resets
- New hire onboarding
- Terminated employee offboarding

The app does not use real authentication, paid services, or external databases.

## Stack

- Next.js
- React
- TypeScript
- Local seeded data
- Cookie-based fake session selection

## Features

- Fake login
- Demo seeded users
- Dashboard
- Customers list
- Customer detail pages
- Role-based access simulation
- Report IT Issue form
- IT admin tools page

## Demo Accounts

- `v.alexander@vkasolutions.net` - CEO
- `sales.user@vkasolutions.net` - Sales user missing CRM access
- `hr.user@vkasolutions.net` - HR user
- `helpdesk@vkasolutions.net` - IT support technician
- `itadmin@vkasolutions.net` - IT admin
- `m.chen@vkasolutions.net` - New employee onboarding scenario
- `t.mills@vkasolutions.net` - Terminated employee access removal scenario

## Local Run

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deployment

This app is intentionally easy to deploy:

- Vercel free tier
- Netlify
- Any Node-capable VPS
- Local machine for training labs

## Documentation

- [AGENTS.md](/C:/Users/valexander/VKASolutions/AGENTS.md)
- [PROJECT_BRIEF.md](/C:/Users/valexander/VKASolutions/docs/PROJECT_BRIEF.md)
- [LAB_SCENARIOS.md](/C:/Users/valexander/VKASolutions/docs/LAB_SCENARIOS.md)
- [SUPPORT_WORKFLOW.md](/C:/Users/valexander/VKASolutions/docs/SUPPORT_WORKFLOW.md)
- [USER_ACCOUNTS.md](/C:/Users/valexander/VKASolutions/docs/USER_ACCOUNTS.md)
- [RELEASE_NOTES.md](/C:/Users/valexander/VKASolutions/docs/RELEASE_NOTES.md)
