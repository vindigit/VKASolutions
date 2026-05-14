import Image from "next/image";
import Link from "next/link";

export function LogoMark({
  href = "/",
  compact = false
}: {
  href?: string;
  compact?: boolean;
}) {
  return (
    <Link href={href} className={`brand-lockup${compact ? " compact" : ""}`}>
      <Image
        src="/vka-logo-monogram.png"
        alt="VKA Solutions logo"
        width={compact ? 56 : 72}
        height={compact ? 56 : 72}
        className="brand-logo"
        priority
      />
      <span className="brand-copy">
        <span className="brand-tag">VKA Solutions</span>
        <span className="brand-title">Practical tech support without the corporate runaround.</span>
      </span>
    </Link>
  );
}
