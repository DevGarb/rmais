import Button from "./Button";

export default function PricingCard({ plan, highlight = false }) {
  const isConsulta = !plan.price.startsWith("R$");
  const [reais, centavos] = isConsulta ? [null, null] : plan.price.replace("R$ ", "").split(",");

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border p-8 transition-transform duration-[var(--duration-base)] hover:-translate-y-1 ${
        highlight
          ? "border-[var(--border-signal)] bg-[var(--color-signal-a07)] shadow-[0_0_0_1px_var(--color-signal-a18),0_0_60px_var(--color-signal-a14)]"
          : "border-[var(--border-subtle)] bg-[var(--surface-raised)]"
      }`}
    >
      {highlight && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-signal-500), transparent)" }}
          aria-hidden="true"
        />
      )}
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-[var(--font-display)] text-[var(--text-xl)] font-bold">{plan.name}</h3>
        {highlight && (
          <span className="shrink-0 rounded-[var(--radius-full)] bg-[var(--color-signal-500)] px-3 py-1 text-[var(--text-xs)] font-bold uppercase tracking-[0.06em] text-[var(--surface-base)]">
            Mais escolhido
          </span>
        )}
      </div>
      <p className="mt-1 text-[var(--text-sm)] text-[var(--text-secondary)]">{plan.description}</p>

      <div className="mt-7 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-base)] px-6 py-5">
        {isConsulta ? (
          <div className="flex items-baseline gap-2">
            <span className="font-[var(--font-display)] text-[var(--text-2xl)] font-extrabold text-[var(--text-primary)]">
              Sob consulta
            </span>
          </div>
        ) : (
          <div className="flex items-baseline">
            <span className="mr-1 font-[var(--font-data)] text-[var(--text-sm)] font-semibold text-[var(--text-tertiary)]">
              R$
            </span>
            <span
              className={`font-[var(--font-display)] text-[var(--text-3xl)] font-extrabold leading-none ${
                highlight ? "text-[var(--text-signal)]" : "text-[var(--text-primary)]"
              }`}
            >
              {reais}
            </span>
            <span className="font-[var(--font-display)] text-[var(--text-lg)] font-bold text-[var(--text-secondary)]">
              ,{centavos}
            </span>
            <span className="ml-2 font-[var(--font-data)] text-[var(--text-xs)] uppercase tracking-wide text-[var(--text-tertiary)]">
              /mês
            </span>
          </div>
        )}
        <p className="mt-1.5 font-[var(--font-data)] text-[var(--text-xs)] text-[var(--text-tertiary)]">
          {isConsulta ? "Proposta sob medida para sua frota" : "Valor exemplificativo — varia por veículo"}
        </p>
      </div>

      <ul className="mt-7 flex flex-1 flex-col gap-3.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[var(--text-sm)] text-[var(--text-secondary)]">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-signal-a14)]">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="text-[var(--text-signal)]">
                <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
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
