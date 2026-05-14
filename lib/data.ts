import { AdminTool, Customer, Scenario, TicketTemplate, User } from "@/lib/types";

export const demoUsers: User[] = [
  {
    id: "user-ceo",
    name: "Vindon Alexander",
    email: "v.alexander@vkasolutions.net",
    role: "ceo",
    title: "Chief Executive Officer",
    department: "Executive",
    status: "locked",
    crmAccess: true,
    notes: ["Account is locked after repeated VPN password attempts.", "Priority executive escalation."]
  },
  {
    id: "user-sales",
    name: "Sonia Patel",
    email: "sales.user@vkasolutions.net",
    role: "sales",
    title: "Account Executive",
    department: "Sales",
    status: "active",
    crmAccess: false,
    notes: ["Recently moved to a new sales pod.", "CRM license mapping failed overnight."]
  },
  {
    id: "user-hr",
    name: "Lena Brooks",
    email: "hr.user@vkasolutions.net",
    role: "hr",
    title: "HR Generalist",
    department: "People Operations",
    status: "active",
    crmAccess: true,
    notes: ["Handles onboarding checklists.", "Coordinates offboarding approvals."]
  },
  {
    id: "user-helpdesk",
    name: "Vairon Alexander",
    email: "helpdesk@vkasolutions.net",
    role: "it_support",
    title: "Help Desk Technician",
    department: "IT Operations",
    status: "active",
    crmAccess: true,
    notes: ["Primary Freshdesk queue monitor.", "Assigned to incident triage."]
  },
  {
    id: "user-admin",
    name: "Valon Alexander",
    email: "itadmin@vkasolutions.net",
    role: "it_admin",
    title: "IT Systems Administrator",
    department: "IT Operations",
    status: "active",
    crmAccess: true,
    notes: ["Can unlock accounts.", "Can grant or revoke CRM access."]
  },
  {
    id: "user-newhire",
    name: "Maya Chen",
    email: "m.chen@vkasolutions.net",
    role: "sales",
    title: "Sales Development Representative",
    department: "Sales",
    status: "pending",
    crmAccess: false,
    notes: ["New employee onboarding starts Monday.", "Needs laptop, CRM role, and email verification."]
  },
  {
    id: "user-terminated",
    name: "Trevor Mills",
    email: "t.mills@vkasolutions.net",
    role: "sales",
    title: "Former Account Manager",
    department: "Sales",
    status: "terminated",
    crmAccess: true,
    notes: ["Offboarding checklist incomplete.", "CRM access should be removed immediately."]
  }
];

export const customers: Customer[] = [
  {
    id: "cust-001",
    name: "Northwind Fiber",
    segment: "Enterprise",
    owner: "Sonia Patel",
    health: "watch",
    renewalDate: "2026-08-30",
    openIssues: 2,
    notes: ["Export button fails on account summary screen.", "Pending Q3 renewal review."]
  },
  {
    id: "cust-002",
    name: "BluePeak Medical",
    segment: "SMB",
    owner: "Maya Chen",
    health: "healthy",
    renewalDate: "2026-11-12",
    openIssues: 0,
    notes: ["Recently added as a training onboarding customer."]
  },
  {
    id: "cust-003",
    name: "Apex Logistics",
    segment: "Mid-Market",
    owner: "Sonia Patel",
    health: "at-risk",
    renewalDate: "2026-06-19",
    openIssues: 3,
    duplicateGroup: "dup-apex",
    notes: ["Duplicate CRM record suspected.", "Billing contact mismatch flagged."]
  },
  {
    id: "cust-004",
    name: "Apex Logistics LLC",
    segment: "Mid-Market",
    owner: "Sonia Patel",
    health: "watch",
    renewalDate: "2026-06-19",
    openIssues: 1,
    duplicateGroup: "dup-apex",
    notes: ["Likely duplicate of Apex Logistics.", "Legacy import created second account."]
  }
];

export const scenarios: Scenario[] = [
  {
    id: "scn-001",
    title: "CEO account locked",
    severity: "high",
    summary: "Executive login blocked after multiple failed attempts. Verify identity, unlock account, and document escalation.",
    linkedUserId: "user-ceo",
    status: "open",
    trainingFocus: "Identity verification and priority escalation"
  },
  {
    id: "scn-002",
    title: "Sales user missing CRM access",
    severity: "high",
    summary: "Sales rep can sign in to workstation but cannot reach CRM records. Role mapping needs correction.",
    linkedUserId: "user-sales",
    status: "investigating",
    trainingFocus: "Permission troubleshooting and license assignment"
  },
  {
    id: "scn-003",
    title: "Duplicate customer record",
    severity: "medium",
    summary: "Apex Logistics appears twice in CRM, creating confusion in reporting and renewals.",
    linkedCustomerId: "cust-003",
    status: "open",
    trainingFocus: "Data hygiene and merge procedures"
  },
  {
    id: "scn-004",
    title: "Export button error",
    severity: "medium",
    summary: "Customer export fails for Northwind Fiber with a generic application error banner.",
    linkedCustomerId: "cust-001",
    status: "open",
    trainingFocus: "Application triage and reproduction steps"
  },
  {
    id: "scn-005",
    title: "Password reset request",
    severity: "low",
    summary: "User forgot password and needs a standard help desk reset workflow.",
    linkedUserId: "user-sales",
    status: "resolved",
    trainingFocus: "Reset validation and documentation"
  },
  {
    id: "scn-006",
    title: "New employee onboarding",
    severity: "medium",
    summary: "New sales hire needs CRM access, a default role, and first-day application readiness.",
    linkedUserId: "user-newhire",
    status: "investigating",
    trainingFocus: "Provisioning checklist execution"
  },
  {
    id: "scn-007",
    title: "Terminated employee access removal",
    severity: "high",
    summary: "Former employee still appears to have active CRM permissions after offboarding.",
    linkedUserId: "user-terminated",
    status: "open",
    trainingFocus: "Offboarding controls and access revocation"
  }
];

export const ticketTemplates: TicketTemplate[] = [
  {
    id: "tick-001",
    title: "Reset password and verify MFA",
    category: "Identity",
    urgency: "medium",
    requestedBy: "Sonia Patel",
    summary: "Standard password reset with follow-up MFA confirmation."
  },
  {
    id: "tick-002",
    title: "Unlock executive account",
    category: "Access",
    urgency: "high",
    requestedBy: "Vindon Alexander",
    summary: "Account locked after repeated sign-in failures."
  },
  {
    id: "tick-003",
    title: "Remove access for terminated employee",
    category: "Offboarding",
    urgency: "high",
    requestedBy: "Lena Brooks",
    summary: "Offboarding task remains incomplete for Trevor Mills."
  }
];

export const adminTools: AdminTool[] = [
  {
    id: "tool-unlock",
    title: "Unlock account",
    description: "Simulate unlocking a user account after identity verification.",
    allowedRoles: ["it_admin"],
    impact: "Clears locked status for executive and standard users."
  },
  {
    id: "tool-access",
    title: "Grant CRM access",
    description: "Apply a CRM entitlement to a demo user for role-based training.",
    allowedRoles: ["it_admin"],
    impact: "Restores application access for sales and onboarding scenarios."
  },
  {
    id: "tool-revoke",
    title: "Revoke access",
    description: "Remove CRM access to close out an offboarding scenario.",
    allowedRoles: ["it_admin"],
    impact: "Supports terminated employee access removal drills."
  },
  {
    id: "tool-merge",
    title: "Merge duplicate customers",
    description: "Walk through the fake merge process for duplicate account records.",
    allowedRoles: ["it_admin", "it_support"],
    impact: "Resolves reporting confusion caused by duplicate accounts."
  }
];
