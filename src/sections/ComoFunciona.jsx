import Reveal from "../components/Reveal";
import EyebrowPill from "../components/EyebrowPill";
import fotoCentral from "../assets/media/central-monitoramento.webp";

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
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
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

        <Reveal className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)]">
            <img
              src={fotoCentral}
              alt="Operadores da central de monitoramento RasterMais acompanhando rotas em tempo real"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-raised)] px-5 py-4">
            <div>
              <p className="font-[var(--font-display)] font-bold">Central de monitoramento RasterMais</p>
              <p className="mt-0.5 text-[var(--text-sm)] text-[var(--text-secondary)]">Operação própria, ativa 24h</p>
            </div>
            <EyebrowPill pulse>ao vivo</EyebrowPill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
