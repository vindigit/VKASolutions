import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/knowledge-base", label: "Knowledge Base" },
  { href: "/ticket-status", label: "Check Ticket Status" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <LogoMark />
        <nav className="site-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/submit-ticket" className="btn">
            Submit a Support Request
          </Link>
        </nav>
      </div>
    </header>
  );
}
