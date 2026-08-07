import { Link } from "react-router-dom";
import PricingCard from "../components/PricingCard";
import EyebrowPill from "../components/EyebrowPill";
import FAQAccordion from "../components/FAQAccordion";
import { plans } from "../data/plans";
import { faqHome } from "../data/faq";

const comparison = [
  { feature: "Rastreamento em tempo real", seguro: false, associacao: true, rastermais: true },
  { feature: "Equipe própria de recuperação", seguro: false, associacao: false, rastermais: true },
  { feature: "Garantia financeira contratual", seguro: true, associacao: false, rastermais: true },
  { feature: "Sem análise de perfil restritiva", seguro: false, associacao: true, rastermais: true },
  { feature: "App proprietário com bloqueio remoto", seguro: false, associacao: false, rastermais: true },
];

function Check({ value }) {
  return value ? (
    <span className="text-[var(--color-success-500)]" aria-label="Sim">
      ✓
    </span>
  ) : (
    <span className="text-[var(--text-tertiary)]" aria-label="Não">
      —
    </span>
  );
}

export default function Planos() {
  return (
    <div className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowPill>Planos e preços</EyebrowPill>
          <h1 className="mx-auto mt-4 max-w-2xl text-[var(--text-3xl)] font-extrabold">
            Escolha o plano certo pro seu veículo
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-[var(--text-secondary)]">
            Valores exemplificativos — a mensalidade final depende do modelo, ano e cidade. Fale com um consultor
            para valor exato.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} highlight={plan.highlight} />
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-center text-[var(--text-2xl)] font-extrabold">Comparativo honesto</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-[var(--text-secondary)]">
            Mostramos onde cada modelo é forte — inclusive onde a RasterMais não é a única resposta certa.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)]">
              <thead>
                <tr className="bg-[var(--surface-raised)] text-left">
                  <th className="p-4 text-[var(--text-sm)] font-semibold">Recurso</th>
                  <th className="p-4 text-center text-[var(--text-sm)] font-semibold">Seguradora</th>
                  <th className="p-4 text-center text-[var(--text-sm)] font-semibold">Associação</th>
                  <th className="p-4 text-center text-[var(--text-sm)] font-semibold text-[var(--text-signal)]">RasterMais</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--text-sm)]">{row.feature}</td>
                    <td className="p-4 text-center">
                      <Check value={row.seguro} />
                    </td>
                    <td className="p-4 text-center">
                      <Check value={row.associacao} />
                    </td>
                    <td className="p-4 text-center">
                      <Check value={row.rastermais} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-[var(--text-xs)] text-[var(--text-tertiary)]">
            Se seu perfil exige análise formal de sinistro para fins bancários/financiamento, uma seguradora
            tradicional pode ser exigência contratual — a RasterMais não substitui esse requisito específico.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-[720px]">
          <h2 className="text-center text-[var(--text-2xl)] font-extrabold">Dúvidas sobre planos</h2>
          <div className="mt-8">
            <FAQAccordion items={faqHome} />
          </div>
          <p className="mt-6 text-center">
            <Link to="/garantia" className="text-[var(--text-signal)] underline">
              Ler o regulamento completo da garantia
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
