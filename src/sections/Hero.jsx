import { Link } from "react-router-dom";
import Button from "../components/Button";
import EyebrowPill from "../components/EyebrowPill";
import heroImage from "../assets/media/hero-night-tracking.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
      <img
        src={heroImage}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--surface-base) 0%, hsl(20 10% 4% / 0.55) 45%, var(--surface-base) 100%), radial-gradient(60% 50% at 50% 0%, var(--color-signal-a10), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 text-center">
        <EyebrowPill pulse>Central de monitoramento ativa 24h</EyebrowPill>
        <h1 className="max-w-3xl text-[var(--text-4xl)] leading-[1.05] font-extrabold [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]">
          Seu carro <span className="text-[var(--text-signal)]">recuperado</span>,<br className="hidden md:block" />{" "}
          ou você <span className="text-[var(--text-signal)]">indenizado</span> até 100% da FIPE
        </h1>
        <p className="max-w-xl text-[var(--text-lg)] text-[var(--text-secondary)] [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
          Rastreamento, central 24h e equipe tática de recuperação em campo. Não é seguro, não é associação —
          é resposta.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button as={Link} to="/planos">
            Simular minha proteção
          </Button>
          <Button variant="ghost" as="a" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
            Falar com um consultor
          </Button>
        </div>
      </div>
    </section>
  );
}
