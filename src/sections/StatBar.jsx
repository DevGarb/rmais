import Reveal from "../components/Reveal";

const pillars = [
  { label: "Operação verticalizada", detail: "Central, campo e app próprios — nada terceirizado." },
  { label: "Tempo de resposta", detail: "SLA publicado por etapa, do alerta ao despacho." },
  { label: "Cobertura", detail: "Lojas e área de atendimento com endereço verificável." },
  { label: "Lastro da garantia", detail: "Regulamento público, CNPJ e condições auditáveis." },
];

export default function StatBar() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--surface-raised)] px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {pillars.map((p, i) => (
          <Reveal key={p.label} style={{ transitionDelay: `${i * 60}ms` }}>
            <p className="font-[var(--font-display)] text-[var(--text-lg)] font-bold text-[var(--text-signal)]">
              {p.label}
            </p>
            <p className="mt-1 text-[var(--text-sm)] text-[var(--text-secondary)]">{p.detail}</p>
          </Reveal>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-[1280px] text-[var(--text-xs)] text-[var(--text-tertiary)] font-[var(--font-data)]">
        * Métricas quantitativas (nº de recuperações, tempo médio real, avaliação agregada) entram aqui assim que a
        operação fornecer dado auditável — ver backlog em RESUMO.md.
      </p>
    </section>
  );
}
