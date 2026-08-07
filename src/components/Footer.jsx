import { Link } from "react-router-dom";

const columns = [
  {
    title: "Produto",
    links: [
      { to: "/planos", label: "Planos" },
      { to: "/garantia", label: "Garantia" },
      { to: "/#app", label: "App" },
      { to: "/#cobertura", label: "Cobertura" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { to: "/faq", label: "Central de ajuda" },
      { to: "/#contato", label: "Contato" },
      { to: "/politicas/privacidade", label: "Privacidade" },
      { to: "/politicas/termos", label: "Termos de uso" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-[var(--border-subtle)] bg-[var(--surface-raised)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="col-span-2">
          <span className="font-[var(--font-display)] text-[1.4rem] font-extrabold">
            <span className="text-[var(--text-primary)]">Raster</span>
            <span className="text-[var(--text-signal)]">Mais</span>
          </span>
          <p className="mt-3 max-w-xs text-[var(--text-sm)] text-[var(--text-secondary)]">
            Rastreamento e proteção veicular com operação própria: central 24h, equipe tática de campo e app
            proprietário.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-[var(--text-sm)] font-[var(--font-data)] uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
              {col.title}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[var(--text-sm)] text-[var(--text-secondary)] hover:text-[var(--text-signal)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border-subtle)] px-5 py-6 text-center text-[var(--text-xs)] text-[var(--text-tertiary)] md:px-8">
        © {new Date().getFullYear()} RasterMais Rastreamento Veicular. CNPJ, endereços e regulamento completo em breve nesta página.
      </div>
    </footer>
  );
}
