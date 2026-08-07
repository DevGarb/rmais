import Reveal from "../components/Reveal";
import { IconSteeringWheel, IconHouseHeart, IconCompass, IconTruckFleet } from "../components/icons";
import fotoMotorista from "../assets/media/persona-motorista.webp";
import fotoFamilia from "../assets/media/persona-familia.webp";
import fotoMulher from "../assets/media/persona-mulher.webp";
import fotoFrota from "../assets/media/persona-frota.webp";

const personas = [
  {
    Icon: IconSteeringWheel,
    image: fotoMotorista,
    imageAlt: "Motorista apoiado no seu carro ao anoitecer em uma rua brasileira",
    tag: "Renda",
    title: "Motorista de app e motoboy",
    desc: "Seu veículo é sua renda. Decisão rápida, plano que cabe no bolso, proteção que não para sua rotina.",
  },
  {
    Icon: IconHouseHeart,
    image: fotoFamilia,
    imageAlt: "Família reunida ao lado do carro na garagem de casa ao entardecer",
    tag: "Patrimônio",
    title: "Família",
    desc: "O carro é patrimônio e é a segurança de quem você ama. Controle na palma da mão, sempre.",
  },
  {
    Icon: IconCompass,
    image: fotoMulher,
    imageAlt: "Mulher motorista consultando o celular dentro do carro à noite",
    tag: "Autonomia",
    title: "Mulher motorista",
    desc: "Autonomia de saber onde o carro está, a qualquer hora, sem depender de mais ninguém.",
  },
  {
    Icon: IconTruckFleet,
    image: fotoFrota,
    imageAlt: "Gestor de frota conferindo veículos comerciais estacionados ao entardecer",
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
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 55%, var(--color-neutral-1000) 100%)",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-signal)] bg-[var(--surface-overlay)] text-[var(--text-signal)] backdrop-blur">
                  <p.Icon width={20} height={20} />
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
