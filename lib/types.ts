export type Role = "ceo" | "sales" | "hr" | "it_admin" | "it_support";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  title: string;
  department: string;
  status: "active" | "locked" | "pending" | "terminated";
  crmAccess: boolean;
  notes: string[];
};

export type Customer = {
  id: string;
  name: string;
  segment: string;
  owner: string;
  health: "healthy" | "watch" | "at-risk";
  renewalDate: string;
  openIssues: number;
  duplicateGroup?: string;
  notes: string[];
};

export type Scenario = {
  id: string;
  title: string;
  severity: "low" | "medium" | "high";
  summary: string;
  linkedUserId?: string;
  linkedCustomerId?: string;
  status: "open" | "investigating" | "resolved";
  trainingFocus: string;
};

export type TicketTemplate = {
  id: string;
  title: string;
  category: string;
  urgency: "low" | "medium" | "high";
  requestedBy: string;
  summary: string;
};

export type AdminTool = {
  id: string;
  title: string;
  description: string;
  allowedRoles: Role[];
  impact: string;
};
