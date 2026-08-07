import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PricingCard from "../components/PricingCard";
import { plans } from "../data/plans";

export default function PlanosHome() {
  return (
    <section id="planos" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="text-center">
          <span className="font-[var(--font-data)] text-[var(--text-xs)] font-semibold uppercase tracking-[0.12em] text-[var(--text-signal)]">
            Planos e preços
          </span>
          <h2 className="mt-3 text-[var(--text-2xl)] font-extrabold">
            Proteção que cabe no seu <span className="text-[var(--text-signal)]">bolso</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-[var(--text-secondary)]">
            Valores exemplificativos, faixa real depende do veículo. Compare em detalhe na página de planos.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} style={{ transitionDelay: `${i * 80}ms` }} className="h-full">
              <PricingCard plan={plan} highlight={plan.highlight} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link to="/planos" className="text-[var(--text-signal)] underline">
            Ver comparativo completo de planos
          </Link>
        </p>
      </div>
    </section>
  );
}
