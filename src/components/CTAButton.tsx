import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2";

  const variants = {
    primary: "bg-teal-600 text-white shadow-sm hover:bg-teal-700",
    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50",
  };

  const className = `${base} ${variants[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
