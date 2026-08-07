import Button from "./Button";

export default function PricingCard({ plan, highlight = false }) {
  return (
    <div
      className={`flex flex-col rounded-[var(--radius-xl)] border p-8 ${
        highlight
          ? "border-[var(--border-signal)] bg-[var(--color-signal-a07)] shadow-[0_0_0_1px_var(--color-signal-a18),0_0_40px_var(--color-signal-a14)]"
          : "border-[var(--border-subtle)] bg-[var(--surface-raised)]"
      }`}
    >
      {highlight && (
        <span className="mb-4 inline-block w-fit rounded-[var(--radius-full)] bg-[var(--color-signal-500)] px-3 py-1 text-[var(--text-xs)] font-bold uppercase tracking-[0.06em] text-[var(--surface-base)]">
          Mais escolhido
        </span>
      )}
      <h3 className="font-[var(--font-display)] text-[var(--text-xl)] font-bold">{plan.name}</h3>
      <p className="mt-1 text-[var(--text-sm)] text-[var(--text-secondary)]">{plan.description}</p>
      <div className="mt-6 flex items-baseline gap-1 font-[var(--font-data)]">
        <span className="text-[var(--text-3xl)] font-bold text-[var(--text-primary)]">{plan.price}</span>
        <span className="text-[var(--text-sm)] text-[var(--text-tertiary)]">/mês</span>
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[var(--text-sm)] text-[var(--text-secondary)]">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-[var(--text-signal)]">
              <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <Button variant={highlight ? "primary" : "ghost"} className="mt-8 w-full">
        Escolher {plan.name}
      </Button>
    </div>
  );
}
