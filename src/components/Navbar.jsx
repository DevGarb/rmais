import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/brand/logo-navbar.webp";

const links = [
  { to: "/#como-funciona", label: "Como funciona" },
  { to: "/planos", label: "Planos" },
  { to: "/garantia", label: "Garantia" },
  { to: "/faq", label: "Ajuda" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-[var(--duration-base)] ${
        scrolled ? "bg-[var(--surface-overlay)] backdrop-blur border-b border-[var(--border-subtle)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="RasterMais, página inicial">
          <img src={logo} alt="RasterMais" className="h-8 w-auto md:h-9" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <a href={l.to} className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-signal)]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" as={Link} to="/planos" className="px-5 py-2 text-[var(--text-sm)]">
            Cotar agora
          </Button>
          <Button
            variant="canal"
            as="a"
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 text-[var(--text-sm)]"
          >
            Falar no WhatsApp
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-subtle)] md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[64px] z-40 flex flex-col gap-6 bg-[var(--surface-base)] p-8 md:hidden">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="text-[var(--text-2xl)] font-[var(--font-display)] font-semibold"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="ghost" as={Link} to="/planos" onClick={() => setOpen(false)}>
              Cotar agora
            </Button>
            <Button variant="canal" as="a" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
