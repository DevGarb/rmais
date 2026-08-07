import Reveal from "../components/Reveal";

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
          {[0, 1, 2].map((i) => (
            <Reveal
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border border-dashed border-[var(--border-strong)] bg-[var(--surface-base)] p-6 text-center"
            >
              <span className="text-[var(--text-tertiary)]">Depoimento em vídeo — aguardando gravação</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
