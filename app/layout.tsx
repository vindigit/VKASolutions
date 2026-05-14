import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VKA CRM",
  description: "Internal CRM simulator for VKA Solutions IT help desk training."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
