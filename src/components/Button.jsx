const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 py-3 font-semibold text-[var(--text-base)] transition-[transform,background-color,border-color,opacity] duration-[var(--duration-fast)] ease-[var(--ease-standard)] disabled:opacity-40 disabled:pointer-events-none active:scale-[0.97]";

const variants = {
  primary:
    "bg-[var(--action-primary-bg)] text-[var(--action-primary-fg)] hover:bg-[var(--action-primary-hover)] active:bg-[var(--action-primary-active)] shadow-[0_0_0_1px_var(--color-signal-a22)]",
  ghost:
    "bg-transparent text-[var(--action-ghost-fg)] border border-[var(--action-ghost-border)] hover:border-[var(--border-signal)] hover:text-[var(--text-signal)]",
  canal:
    "bg-[var(--color-channel-500)] text-white hover:bg-[var(--color-channel-600)]",
};

export default function Button({ variant = "primary", as: Tag = "button", className = "", children, ...rest }) {
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
