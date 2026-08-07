import EyebrowPill from "../components/EyebrowPill";
import FAQAccordion from "../components/FAQAccordion";
import { faqFull } from "../data/faq";

export default function FAQPage() {
  return (
    <div className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-[800px]">
        <EyebrowPill>Central de ajuda</EyebrowPill>
        <h1 className="mt-4 text-[var(--text-3xl)] font-extrabold">Perguntas frequentes</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Não achou sua dúvida aqui? Fale com a gente pelo WhatsApp no botão flutuante desta página.
        </p>
        <div className="mt-10">
          <FAQAccordion items={faqFull} />
        </div>
      </div>
    </div>
  );
}
