import Reveal from "../components/Reveal";

const steps = [
  { time: "Minuto 0", title: "Alerta", desc: "Você aciona a central pelo app ou telefone assim que percebe a ocorrência." },
  { time: "Minuto 1-2", title: "Confirmação", desc: "A central confirma os dados e localização atual do veículo." },
  { time: "Minuto 2-5", title: "Bloqueio", desc: "Bloqueio remoto acionado quando a situação permite com segurança." },
  { time: "Minuto 5+", title: "Despacho", desc: "Equipe tática de campo é despachada para a última localização confirmada." },
  { time: "Até a resolução", title: "Recuperação ou garantia", desc: "Veículo recuperado, ou processo de indenização iniciado conforme regulamento." },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <h2 className="text-[var(--text-2xl)] font-extrabold">Como funciona a recuperação</h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Processo, não promessa. Cada etapa fica registrada com horário no seu histórico.
          </p>
        </Reveal>
        <ol className="mt-10 flex flex-col gap-0">
          {steps.map((s, i) => (
            <Reveal key={s.title} as="li" style={{ transitionDelay: `${i * 80}ms` }} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--border-signal)] bg-[var(--surface-base)] font-[var(--font-data)] text-[var(--text-xs)] font-bold text-[var(--text-signal)]">
                  {i + 1}
                </span>
                {i < steps.length - 1 && <span className="mt-1 w-px flex-1 bg-[var(--border-strong)]" aria-hidden="true" />}
              </div>
              <div className="pt-1.5">
                <p className="font-[var(--font-data)] text-[var(--text-xs)] uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
                  {s.time}
                </p>
                <h3 className="mt-1 font-[var(--font-display)] text-[var(--text-lg)] font-bold">{s.title}</h3>
                <p className="mt-1 text-[var(--text-sm)] text-[var(--text-secondary)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
