import Reveal from "../components/Reveal";
import { IconHeadset, IconShieldTeam, IconPin, IconBanknote } from "../components/icons";

const pillars = [
  { Icon: IconShieldTeam, label: "Operação verticalizada", detail: "Central, campo e app próprios — nada terceirizado." },
  { Icon: IconHeadset, label: "Tempo de resposta", detail: "SLA publicado por etapa, do alerta ao despacho." },
  { Icon: IconPin, label: "Cobertura", detail: "Lojas e área de atendimento com endereço verificável." },
  { Icon: IconBanknote, label: "Lastro da garantia", detail: "Regulamento público, CNPJ e condições auditáveis." },
];

export default function StatBar() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--surface-raised)] px-5 py-14 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.label}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-base)] p-6 transition-colors duration-[var(--duration-base)] hover:border-[var(--border-signal)]"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 transition-opacity duration-[var(--duration-base)] group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, var(--color-signal-a14), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-signal)] bg-[var(--color-signal-a10)] text-[var(--text-signal)]">
                <p.Icon width={22} height={22} />
              </div>
              <p className="mt-4 font-[var(--font-display)] text-[var(--text-base)] font-bold text-[var(--text-primary)]">
                {p.label}
              </p>
              <p className="mt-1.5 text-[var(--text-sm)] leading-relaxed text-[var(--text-secondary)]">{p.detail}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 border-t border-[var(--border-subtle)] pt-5 text-center font-[var(--font-data)] text-[var(--text-xs)] text-[var(--text-tertiary)]">
          Métricas quantitativas (recuperações, tempo médio, avaliação agregada) serão publicadas aqui com fonte e
          metodologia auditáveis.
        </p>
      </div>
    </section>
  );
}
