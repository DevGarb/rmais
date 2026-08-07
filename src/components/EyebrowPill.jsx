export default function EyebrowPill({ children, pulse = false }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-[var(--border-signal)] bg-[var(--color-signal-a10)] px-4 py-1.5 text-[var(--text-xs)] font-semibold uppercase tracking-[0.08em] text-[var(--text-signal)] font-[var(--font-data)]">
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal-500)] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-signal-500)]" />
        </span>
      )}
      {children}
    </span>
  );
}
