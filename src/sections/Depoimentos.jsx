import Reveal from "../components/Reveal";
import photoHomem from "../assets/media/depoimentos-bg.webp";
import photoMulher from "../assets/media/depoimentos-mulher.webp";
import photoHomem2 from "../assets/media/depoimentos-homem2.webp";

const previews = [photoHomem, photoMulher, photoHomem2];

function PreviewCard({ photo, delay }) {
  return (
    <Reveal
      style={{ transitionDelay: `${delay}ms` }}
      className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)]"
    >
      <img src={photo} alt="" loading="lazy" className="h-full w-full object-cover" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(0deg, var(--color-neutral-1000) 5%, transparent 55%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-signal)] bg-[var(--surface-overlay)] text-[var(--text-signal)] backdrop-blur transition-transform duration-[var(--duration-base)] group-hover:scale-110">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 4l10 6-10 6V4z" />
          </svg>
        </span>
      </div>
      <span className="absolute left-3 top-3 rounded-[var(--radius-full)] bg-[var(--color-signal-500)] px-3 py-1 font-[var(--font-data)] text-[var(--text-xs)] font-bold uppercase tracking-[0.06em] text-[var(--surface-base)]">
        Prévia do formato
      </span>
      <p className="absolute bottom-3 left-3 right-3 text-[var(--text-xs)] text-[var(--text-tertiary)]">
        Ilustrativa — não é um cliente real.
      </p>
    </Reveal>
  );
}

export default function Depoimentos() {
  return (
    <section className="bg-[var(--surface-raised)] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="text-[var(--text-2xl)] font-extrabold">Depoimentos de clientes</h2>
          <p className="mt-2 max-w-lg text-[var(--text-secondary)]">
            Espaço reservado para casos reais — vídeo, cidade/bairro, veículo e data da ocorrência, com link para a
            avaliação de origem. Nenhum depoimento fictício é publicado nesta página.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {previews.map((photo, i) => (
            <PreviewCard key={photo} photo={photo} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
