import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PricingCard from "../components/PricingCard";
import { plans } from "../data/plans";

export default function PlanosHome() {
  return (
    <section id="planos" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="text-center">
          <h2 className="text-[var(--text-2xl)] font-extrabold">Planos e preços</h2>
          <p className="mx-auto mt-2 max-w-lg text-[var(--text-secondary)]">
            Valores exemplificativos, faixa real depende do veículo. Compare em detalhe na página de planos.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} style={{ transitionDelay: `${i * 80}ms` }}>
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
