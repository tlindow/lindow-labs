import { type ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  href?: string;
  tag?: string;
}

export default function Card({ icon, title, description, href, tag }: CardProps) {
  const inner = (
    <>
      {icon && (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100">
          {icon}
        </div>
      )}
      {tag && (
        <span className="mb-2 inline-block w-fit rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
          {tag}
        </span>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {description}
      </p>
    </>
  );

  const className =
    "group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-teal-200 hover:shadow-md";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}
