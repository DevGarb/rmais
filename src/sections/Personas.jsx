import Reveal from "../components/Reveal";
import { IconSteeringWheel, IconHouseHeart, IconCompass, IconTruckFleet } from "../components/icons";

const personas = [
  {
    Icon: IconSteeringWheel,
    title: "Motorista de app e motoboy",
    desc: "Seu veículo é sua renda. Decisão rápida, plano que cabe no bolso, proteção que não para sua rotina.",
  },
  {
    Icon: IconHouseHeart,
    title: "Família",
    desc: "O carro é patrimônio e é a segurança de quem você ama. Controle na palma da mão, sempre.",
  },
  {
    Icon: IconCompass,
    title: "Mulher motorista",
    desc: "Autonomia de saber onde o carro está, a qualquer hora, sem depender de mais ninguém.",
  },
  {
    Icon: IconTruckFleet,
    title: "Pequena frota (2-20 veículos)",
    desc: "Decisão racional: console de gestão, custo previsível e relatório que fecha a conta no fim do mês.",
  },
];

export default function Personas() {
  return (
    <section className="bg-[var(--surface-raised)] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="text-[var(--text-2xl)] font-extrabold">Para quem é a RasterMais</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p, i) => (
            <Reveal
              key={p.title}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-base)] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-signal-a10)] text-[var(--text-signal)]">
                <p.Icon />
              </div>
              <h3 className="mt-4 font-[var(--font-display)] font-bold">{p.title}</h3>
              <p className="mt-2 text-[var(--text-sm)] text-[var(--text-secondary)]">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
