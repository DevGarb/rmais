import { useState } from "react";
import Reveal from "../components/Reveal";
import appPhoto from "../assets/media/app-mockup.webp";

const tabs = [
  {
    id: "bloqueio",
    label: "Bloqueio",
    title: "Bloqueio remoto",
    desc: "Trave o veículo à distância em um toque, direto do app.",
  },
  {
    id: "cerca",
    label: "Cerca virtual",
    title: "Cerca virtual",
    desc: "Defina uma área segura e receba alerta se o veículo sair dela.",
  },
  {
    id: "historico",
    label: "Histórico",
    title: "Histórico de rotas",
    desc: "Veja todo o trajeto percorrido nos últimos 30 dias.",
  },
];

export default function AppDemo() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active);

  return (
    <section id="app" className="px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="text-[var(--text-2xl)] font-extrabold">O app RasterMais, sem precisar instalar</h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            Explore as funções principais direto aqui na página.
          </p>
          <div className="mt-6 flex gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-[var(--radius-full)] px-4 py-2 text-[var(--text-sm)] font-semibold transition-colors ${
                  active === t.id
                    ? "bg-[var(--color-signal-500)] text-[var(--surface-base)]"
                    : "border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="mt-6 max-w-sm rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-5">
            <h3 className="font-[var(--font-display)] font-bold">{tab.title}</h3>
            <p className="mt-1 text-[var(--text-sm)] text-[var(--text-secondary)]">{tab.desc}</p>
          </div>
        </Reveal>

        <Reveal className="relative mx-auto flex justify-center">
          <div className="absolute -inset-10 -z-10 overflow-hidden rounded-[var(--radius-xl)] sm:-inset-16" aria-hidden="true">
            <img src={appPhoto} alt="" className="h-full w-full object-cover opacity-50 blur-[2px]" />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(55% 55% at 50% 50%, transparent 10%, var(--surface-base) 88%)" }}
            />
          </div>
          <div className="relative flex h-[520px] w-[260px] flex-col overflow-hidden rounded-[2.5rem] border-4 border-[var(--border-strong)] bg-[var(--surface-raised)] p-3 shadow-2xl">
            <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-[var(--border-strong)]" />
            <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-[1.75rem] bg-[var(--surface-base)] p-6 text-center">
              {tab.id === "bloqueio" && (
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[var(--color-signal-500)]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[var(--text-signal)]">
                    <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              )}
              {tab.id === "cerca" && (
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-dashed border-[var(--color-signal-500)]">
                  <span className="h-3 w-3 rounded-full bg-[var(--color-signal-500)]" />
                </div>
              )}
              {tab.id === "historico" && (
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                  <path
                    d="M5 60 Q30 10 60 40 T115 20"
                    stroke="var(--color-signal-500)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              )}
              <p className="font-[var(--font-data)] text-[var(--text-xs)] uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
                {tab.label} ativo
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
