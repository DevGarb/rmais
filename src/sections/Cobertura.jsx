import Reveal from "../components/Reveal";
import coberturaPhoto from "../assets/media/cobertura-bg.webp";

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
        <Reveal className="relative mt-8 aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)]">
          <img src={coberturaPhoto} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(0deg, var(--surface-base) 0%, transparent 40%)" }}
            aria-hidden="true"
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-lg)] border border-[var(--border-signal)] bg-[var(--surface-overlay)] px-5 py-3 backdrop-blur">
            <p className="font-[var(--font-data)] text-[var(--text-sm)] text-[var(--text-primary)]">
              Mapa de cobertura — aguardando lista real de lojas/regiões atendidas
            </p>
            <span className="rounded-[var(--radius-full)] bg-[var(--color-signal-500)] px-3 py-1 font-[var(--font-data)] text-[var(--text-xs)] font-bold uppercase tracking-[0.06em] text-[var(--surface-base)]">
              Em breve
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
