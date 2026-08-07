import Reveal from "../components/Reveal";
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
        <Reveal>
          <h2 className="max-w-xl text-[var(--text-2xl)] font-extrabold">O que a RasterMais oferece</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-signal-a10)] text-[var(--text-signal)]">
                <f.Icon />
              </div>
              <h3 className="mt-4 font-[var(--font-display)] text-[var(--text-lg)] font-bold">{f.title}</h3>
              <p className="mt-2 text-[var(--text-sm)] text-[var(--text-secondary)]">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
