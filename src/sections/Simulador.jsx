import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import EyebrowPill from "../components/EyebrowPill";
import { IconPin } from "../components/icons";
import { useCountUp } from "../hooks/useCountUp";

const PLATE_RE = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;
const SCAN_MS = 900;

function formatPlate(raw) {
  return raw
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 7);
}

function mockLookup(plate) {
  let hash = 0;
  for (const char of plate) hash = (hash * 31 + char.charCodeAt(0)) % 999999;
  const fipeValue = 38000 + (hash % 90000);
  const monthly = Math.round((fipeValue * 0.011) / 10) * 10;
  const models = ["Hatch compacto", "Sedã médio", "SUV compacto", "Picape leve", "Hatch premium"];
  return {
    model: models[hash % models.length],
    fipeValue,
    monthly,
  };
}

function RadarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[var(--radius-xl)]" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--border-strong) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute -inset-1/2 animate-[spin_9s_linear_infinite] motion-reduce:animate-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, var(--color-signal-a14) 25deg, transparent 70deg)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(60% 60% at 15% 0%, var(--color-signal-a10), transparent 70%)",
        }}
      />
    </div>
  );
}

function AnimatedStat({ label, value, prefix = "", suffix = "", active }) {
  const count = useCountUp(value, active);
  return (
    <div>
      <p className="font-[var(--font-data)] text-[var(--text-xs)] uppercase tracking-[0.06em] text-[var(--text-tertiary)]">
        {label}
      </p>
      <p className="mt-1 font-[var(--font-data)] text-[var(--text-xl)] font-bold text-[var(--text-signal)]">
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </p>
    </div>
  );
}

export default function Simulador() {
  const [plate, setPlate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [scanning, setScanning] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const clean = formatPlate(plate);
    if (!PLATE_RE.test(clean)) {
      setError("Digite uma placa válida, formato ABC1D23.");
      setResult(null);
      return;
    }
    setError("");
    setResult(null);
    setScanning(true);
    window.setTimeout(() => {
      setScanning(false);
      setResult(mockLookup(clean));
    }, SCAN_MS);
  }

  return (
    <section id="simulador" className="px-5 py-20 md:px-8">
      <Reveal className="relative mx-auto max-w-[720px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-signal)] bg-[var(--surface-raised)] p-8 shadow-[0_0_60px_var(--color-signal-a14)] md:p-12">
        <RadarField />
        <div className="relative">
          <EyebrowPill pulse>Simulador por placa</EyebrowPill>
          <h2 className="mt-4 text-[var(--text-2xl)] font-extrabold">Descubra sua faixa de proteção agora</h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Digite a placa do seu veículo e veja uma estimativa de valor de garantia e mensalidade.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="plate-input" className="sr-only">
              Placa do veículo
            </label>
            <div className="relative flex-1">
              <IconPin
                width={20}
                height={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-signal)]"
              />
              <input
                id="plate-input"
                value={plate}
                onChange={(e) => setPlate(formatPlate(e.target.value))}
                placeholder="ABC1D23"
                maxLength={7}
                autoComplete="off"
                className="w-full rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface-base)] py-3 pl-12 pr-5 font-[var(--font-data)] text-[var(--text-lg)] uppercase tracking-[0.15em] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-signal)]"
              />
            </div>
            <Button type="submit" disabled={scanning}>
              {scanning ? "Analisando..." : "Simular"}
            </Button>
          </form>
          {error && <p className="mt-3 text-[var(--text-sm)] text-[var(--color-error-500)]">{error}</p>}

          {scanning && (
            <div className="mt-8 flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border-signal)] bg-[var(--color-signal-a07)] p-6 font-[var(--font-data)] text-[var(--text-sm)] text-[var(--text-signal)]">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal-500)] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-signal-500)]" />
              </span>
              Consultando placa {formatPlate(plate)}...
            </div>
          )}

          {result && (
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-[var(--radius-lg)] border border-[var(--border-signal)] bg-[var(--color-signal-a07)] p-6">
              <div className="col-span-2 flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                <span className="font-[var(--font-data)] text-[var(--text-xs)] uppercase tracking-[0.06em] text-[var(--text-tertiary)]">
                  Placa {formatPlate(plate)}
                </span>
                <span className="rounded-[var(--radius-full)] bg-[var(--color-success-500)]/15 px-2.5 py-1 font-[var(--font-data)] text-[var(--text-xs)] font-bold uppercase tracking-[0.06em] text-[var(--color-success-400)]">
                  ✓ Encontrado
                </span>
              </div>
              <div>
                <p className="text-[var(--text-xs)] font-[var(--font-data)] uppercase text-[var(--text-tertiary)]">Veículo estimado</p>
                <p className="mt-1 font-[var(--font-display)] font-bold">{result.model}</p>
              </div>
              <AnimatedStat label="Valor FIPE aprox." value={result.fipeValue} prefix="R$ " active={!!result} />
              <div className="col-span-2">
                <AnimatedStat label="Mensalidade estimada" value={result.monthly} prefix="R$ " suffix="/mês" active={!!result} />
              </div>
              <p className="col-span-2 text-[var(--text-xs)] text-[var(--text-tertiary)]">
                Simulação ilustrativa gerada localmente — não consulta a tabela FIPE real. Valor exato depende do modelo,
                ano e plano.{" "}
                <Link to="/planos" className="text-[var(--text-signal)] underline">
                  Ver planos e falar com um consultor
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
