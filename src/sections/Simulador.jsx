import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import EyebrowPill from "../components/EyebrowPill";

const PLATE_RE = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;

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

export default function Simulador() {
  const [plate, setPlate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const clean = formatPlate(plate);
    if (!PLATE_RE.test(clean)) {
      setError("Digite uma placa válida, formato ABC1D23.");
      setResult(null);
      return;
    }
    setError("");
    setResult(mockLookup(clean));
  }

  return (
    <section id="simulador" className="px-5 py-20 md:px-8">
      <Reveal className="mx-auto max-w-[720px] rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-8 md:p-12">
        <EyebrowPill>Simulador por placa</EyebrowPill>
        <h2 className="mt-4 text-[var(--text-2xl)] font-extrabold">Descubra sua faixa de proteção agora</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Digite a placa do seu veículo e veja uma estimativa de valor de garantia e mensalidade.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="plate-input" className="sr-only">
            Placa do veículo
          </label>
          <input
            id="plate-input"
            value={plate}
            onChange={(e) => setPlate(formatPlate(e.target.value))}
            placeholder="ABC1D23"
            maxLength={7}
            autoComplete="off"
            className="flex-1 rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface-base)] px-5 py-3 font-[var(--font-data)] text-[var(--text-lg)] uppercase tracking-[0.1em] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
          />
          <Button type="submit">Simular</Button>
        </form>
        {error && <p className="mt-3 text-[var(--text-sm)] text-[var(--color-error-500)]">{error}</p>}

        {result && (
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-[var(--radius-lg)] border border-[var(--border-signal)] bg-[var(--color-signal-a07)] p-6">
            <div>
              <p className="text-[var(--text-xs)] font-[var(--font-data)] uppercase text-[var(--text-tertiary)]">Veículo estimado</p>
              <p className="mt-1 font-[var(--font-display)] font-bold">{result.model}</p>
            </div>
            <div>
              <p className="text-[var(--text-xs)] font-[var(--font-data)] uppercase text-[var(--text-tertiary)]">Valor FIPE aprox.</p>
              <p className="mt-1 font-[var(--font-data)] font-bold text-[var(--text-signal)]">
                R$ {result.fipeValue.toLocaleString("pt-BR")}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[var(--text-xs)] font-[var(--font-data)] uppercase text-[var(--text-tertiary)]">Mensalidade estimada</p>
              <p className="mt-1 text-[var(--text-xl)] font-[var(--font-data)] font-bold">
                R$ {result.monthly.toLocaleString("pt-BR")}/mês
              </p>
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
      </Reveal>
    </section>
  );
}
