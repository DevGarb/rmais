import Reveal from "../components/Reveal";
import { IconSteeringWheel, IconHouseHeart, IconCompass, IconTruckFleet } from "../components/icons";

const personas = [
  {
    Icon: IconSteeringWheel,
    tag: "Renda",
    title: "Motorista de app e motoboy",
    desc: "Seu veículo é sua renda. Decisão rápida, plano que cabe no bolso, proteção que não para sua rotina.",
  },
  {
    Icon: IconHouseHeart,
    tag: "Patrimônio",
    title: "Família",
    desc: "O carro é patrimônio e é a segurança de quem você ama. Controle na palma da mão, sempre.",
  },
  {
    Icon: IconCompass,
    tag: "Autonomia",
    title: "Mulher motorista",
    desc: "Autonomia de saber onde o carro está, a qualquer hora, sem depender de mais ninguém.",
  },
  {
    Icon: IconTruckFleet,
    tag: "Gestão",
    title: "Pequena frota (2-20 veículos)",
    desc: "Decisão racional: console de gestão, custo previsível e relatório que fecha a conta no fim do mês.",
  },
];

export default function Personas() {
  return (
    <section className="bg-[var(--surface-raised)] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="text-center">
          <h2 className="text-[var(--text-2xl)] font-extrabold">
            Para quem é a <span className="text-[var(--text-signal)]">RasterMais</span>
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[var(--text-secondary)]">
            Perfis diferentes, mesma necessidade: controle e resposta.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p, i) => (
            <Reveal
              key={p.title}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-base)] transition-[border-color,transform] duration-[var(--duration-base)] hover:-translate-y-1 hover:border-[var(--border-signal)]"
            >
              {/* Slot de imagem — substituir por fotografia real da persona (backlog onda 2) */}
              <div
                className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                style={{
                  background:
                    "radial-gradient(80% 90% at 50% 100%, var(--color-signal-a18), transparent 65%), linear-gradient(200deg, var(--color-neutral-900), var(--color-neutral-1000))",
                }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, var(--border-strong) 1px, transparent 0)",
                    backgroundSize: "22px 22px",
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--border-signal)] bg-[var(--surface-base)] text-[var(--text-signal)] shadow-[0_0_32px_var(--color-signal-a22)] transition-transform duration-[var(--duration-base)] group-hover:scale-110">
                  <p.Icon width={38} height={38} />
                </div>
              </div>
              <div className="p-6">
                <span className="font-[var(--font-data)] text-[var(--text-xs)] font-semibold uppercase tracking-[0.1em] text-[var(--text-signal)]">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-[var(--font-display)] text-[var(--text-lg)] font-bold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-[var(--text-sm)] leading-relaxed text-[var(--text-secondary)]">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
