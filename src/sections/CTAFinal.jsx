import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import EyebrowPill from "../components/EyebrowPill";

export default function CTAFinal() {
  return (
    <section className="px-5 py-20 md:px-8">
      <Reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
        <EyebrowPill pulse>Fale com quem atende de verdade</EyebrowPill>
        <h2 className="text-[var(--text-2xl)] font-extrabold">
          Pronto pra colocar seu carro sob proteção RasterMais?
        </h2>
        <p className="max-w-md text-[var(--text-secondary)]">
          Nossa equipe responde no WhatsApp em horário comercial, e a central de monitoramento fica ativa 24h.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button as={Link} to="/planos">
            Simular minha proteção
          </Button>
          <Button variant="canal" as="a" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
