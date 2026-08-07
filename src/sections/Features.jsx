import Reveal from "../components/Reveal";
import EyebrowPill from "../components/EyebrowPill";
import { IconPin, IconHeadset, IconShieldTeam, IconBanknote, IconLock, IconStore } from "../components/icons";

const features = [
  { Icon: IconPin, title: "Rastreamento em tempo real", desc: "Localização, histórico de rotas e cerca virtual no app." },
  { Icon: IconHeadset, title: "Central de monitoramento 24h", desc: "Equipe própria acompanhando alertas todos os dias, o ano todo." },
  { Icon: IconShieldTeam, title: "Equipe tática de campo", desc: "Recuperação ativa, não terceirizada — mesma operação do início ao fim." },
  { Icon: IconBanknote, title: "Garantia financeira", desc: "Indenização de até 100% da FIPE quando a recuperação não é possível." },
  { Icon: IconLock, title: "Bloqueio remoto", desc: "Trava o veículo à distância pelo app em caso de ocorrência." },
  { Icon: IconStore, title: "Lojas físicas", desc: "Instalação e suporte presencial, sem depender só de atendimento remoto." },
];

export default function Features() {
  return (
    <section className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="text-center">
          <EyebrowPill>Capacidades</EyebrowPill>
          <h2 className="mx-auto mt-4 max-w-xl text-[var(--text-2xl)] font-extrabold">
            O que a <span className="text-[var(--text-signal)]">RasterMais</span> oferece
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-6 transition-[transform,border-color] duration-[var(--duration-base)] hover:-translate-y-1.5 hover:border-[var(--border-signal)]"
            >
              <span className="pointer-events-none absolute -right-8 -top-8 font-[var(--font-display)] text-[5rem] font-extrabold text-[var(--border-subtle)] transition-colors duration-[var(--duration-base)] group-hover:text-[var(--color-signal-a14)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-[var(--duration-base)] group-hover:opacity-100"
                style={{ background: "var(--color-signal-a22)" }}
                aria-hidden="true"
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-signal-a10)] text-[var(--text-signal)] transition-transform duration-[var(--duration-base)] group-hover:scale-110 group-hover:bg-[var(--color-signal-500)] group-hover:text-[var(--surface-base)]">
                <f.Icon />
              </div>
              <h3 className="relative mt-4 font-[var(--font-display)] text-[var(--text-lg)] font-bold">{f.title}</h3>
              <p className="relative mt-2 text-[var(--text-sm)] text-[var(--text-secondary)]">{f.desc}</p>
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-[var(--duration-base)] group-hover:scale-x-100"
                style={{ background: "linear-gradient(90deg, transparent, var(--color-signal-500), transparent)" }}
                aria-hidden="true"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
