import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function GarantiaTeaser() {
  return (
    <section className="px-5 py-20 md:px-8">
      <Reveal className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 rounded-[var(--radius-xl)] border border-[var(--border-signal)] bg-[var(--color-signal-a07)] p-10 text-center md:p-16">
        <span className="rounded-[var(--radius-full)] bg-[var(--color-signal-500)] px-4 py-1.5 text-[var(--text-xs)] font-bold uppercase tracking-[0.06em] text-[var(--surface-base)]">
          Selo de garantia
        </span>
        <h2 className="max-w-2xl text-[var(--text-2xl)] font-extrabold">
          Recuperação ou indenização até 100% da FIPE, com regras publicadas
        </h2>
        <p className="max-w-xl text-[var(--text-secondary)]">
          Sem letra miúda escondida. Regulamento completo, carência, exclusões e prazo de acionamento — tudo em uma
          página só, antes de você contratar.
        </p>
        <Button as={Link} to="/garantia">
          Ler o regulamento da garantia
        </Button>
      </Reveal>
    </section>
  );
}
