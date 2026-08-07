import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

const bullets = [
  "Regulamento completo publicado antes da contratação",
  "Carência e exclusões em linguagem clara",
  "Indenização baseada na tabela FIPE do mês da ocorrência",
  "Fluxo de acionamento explicado passo a passo",
];

function SeloBadge() {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute h-64 w-64 rounded-full"
        style={{ background: "radial-gradient(circle, var(--color-signal-a18), transparent 65%)" }}
        aria-hidden="true"
      />
      <svg width="220" height="240" viewBox="0 0 220 240" fill="none" className="relative" aria-hidden="true">
        <path
          d="M110 8l88 30v66c0 58-38 104-88 126C60 208 22 162 22 104V38l88-30z"
          fill="var(--surface-raised)"
          stroke="var(--color-signal-500)"
          strokeWidth="3"
        />
        <path
          d="M110 26l72 24v54c0 48-31 86-72 104-41-18-72-56-72-104V50l72-24z"
          fill="none"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
        />
        <path
          d="M110 150s34-27.6 34-49a34 34 0 10-68 0c0 21.4 34 49 34 49z"
          fill="var(--color-signal-500)"
        />
        <circle cx="110" cy="99" r="13" fill="var(--surface-raised)" />
        <text
          x="110"
          y="182"
          textAnchor="middle"
          fill="var(--text-signal)"
          fontFamily="JetBrains Mono, monospace"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2"
        >
          100% FIPE
        </text>
      </svg>
    </div>
  );
}

export default function GarantiaTeaser() {
  return (
    <section className="px-5 py-20 md:px-8">
      <Reveal className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-signal)] bg-[var(--color-signal-a07)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-signal-500), transparent)" }}
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 items-center gap-10 p-10 md:grid-cols-[1fr_auto] md:p-16">
          <div>
            <span className="rounded-[var(--radius-full)] bg-[var(--color-signal-500)] px-4 py-1.5 font-[var(--font-data)] text-[var(--text-xs)] font-bold uppercase tracking-[0.08em] text-[var(--surface-base)]">
              GarantiaMais
            </span>
            <h2 className="mt-5 max-w-xl text-[var(--text-2xl)] font-extrabold leading-tight">
              Recuperação ou indenização{" "}
              <span className="text-[var(--text-signal)]">até 100% da FIPE</span>, com regras publicadas
            </h2>
            <ul className="mt-6 flex max-w-lg flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[var(--text-sm)] text-[var(--text-secondary)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-signal-a14)]">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="text-[var(--text-signal)]">
                      <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button as={Link} to="/garantia">
                Ler o regulamento da garantia
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <SeloBadge />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
