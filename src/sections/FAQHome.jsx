import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import FAQAccordion from "../components/FAQAccordion";
import { faqHome } from "../data/faq";

export default function FAQHome() {
  return (
    <section className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <h2 className="text-[var(--text-2xl)] font-extrabold">Perguntas frequentes</h2>
        </Reveal>
        <div className="mt-8">
          <FAQAccordion items={faqHome} />
        </div>
        <p className="mt-6 text-center">
          <Link to="/faq" className="text-[var(--text-signal)] underline">
            Ver central de ajuda completa
          </Link>
        </p>
      </div>
    </section>
  );
}
