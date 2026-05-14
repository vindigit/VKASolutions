import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VKA Solutions Support Portal",
  description: "Customer-facing IT support portal for VKA Solutions home and small-business support.",
  icons: {
    icon: "/vka-logo-monogram.png",
    shortcut: "/vka-logo-monogram.png",
    apple: "/vka-logo-monogram.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
