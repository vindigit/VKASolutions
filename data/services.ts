import { ServiceSection, SupportArea } from "@/lib/types";

export const homeSupportAreas: SupportArea[] = [
  {
    title: "Home Tech Support",
    description: "Get help with home Wi-Fi, printers, email, streaming apps, and device setup."
  },
  {
    title: "Small Business IT",
    description: "Support for business email, employee devices, office printers, and everyday software issues."
  },
  {
    title: "Remote Troubleshooting",
    description: "Quick remote sessions for common problems without waiting on a large service desk."
  },
  {
    title: "Device Setup",
    description: "New phone, laptop, printer, and smart TV setup with practical step-by-step help."
  }
];

export const serviceSections: ServiceSection[] = [
  {
    title: "Home IT Support",
    description: "Practical help for the devices and services people use every day at home.",
    items: [
      "New phone setup",
      "Smart TV and app setup",
      "Wi-Fi troubleshooting",
      "Printer setup",
      "Password recovery help",
      "Basic computer cleanup"
    ]
  },
  {
    title: "Small Business IT Support",
    description: "Straightforward support for small teams that need things working without a full in-house IT department.",
    items: [
      "Employee device setup",
      "Email access issues",
      "Printer and network troubleshooting",
      "CRM access issues",
      "Spreadsheet and import support",
      "Offboarding checklist help"
    ]
  },
  {
    title: "Security Basics",
    description: "Simple security help that makes day-to-day tech safer without adding unnecessary complexity.",
    items: [
      "MFA setup",
      "Password manager setup",
      "Suspicious email review",
      "Device security check",
      "Wi-Fi password change"
    ]
  }
];
