import Reveal from "../components/Reveal";

export default function Cobertura() {
  return (
    <section id="cobertura" className="bg-[var(--surface-raised)] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="text-[var(--text-2xl)] font-extrabold">Cobertura e lojas</h2>
          <p className="mt-2 max-w-lg text-[var(--text-secondary)]">
            Endereços, CNPJ e horário de cada unidade entram aqui assim que confirmados — necessário para o
            schema.org LocalBusiness e para SEO local.
          </p>
        </Reveal>
        <div className="mt-8 flex aspect-video items-center justify-center rounded-[var(--radius-xl)] border border-dashed border-[var(--border-strong)] bg-[var(--surface-base)]">
          <p className="font-[var(--font-data)] text-[var(--text-sm)] text-[var(--text-tertiary)]">
            Mapa de cobertura — aguardando lista de lojas/regiões atendidas
          </p>
        </div>
      </div>
    </section>
  );
}
