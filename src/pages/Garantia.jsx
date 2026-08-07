import { Link } from "react-router-dom";
import EyebrowPill from "../components/EyebrowPill";
import Button from "../components/Button";

const sections = [
  {
    title: "O que a garantia cobre",
    body: "Indenização em dinheiro de até 100% do valor da tabela FIPE do veículo, apurado no mês da ocorrência, quando a recuperação não for possível dentro do prazo contratual. O percentual exato contratado consta no seu plano e no contrato assinado.",
  },
  {
    title: "Carência",
    body: "Todo plano com garantia tem um prazo de carência entre a contratação e a data em que a cobertura de indenização passa a valer. O prazo exato depende do plano e é informado antes da assinatura — não escondido em cláusula posterior.",
  },
  {
    title: "O que não é coberto (exclusões)",
    body: "Uso indevido do veículo, atraso ou inadimplência no pagamento da mensalidade, ausência de instalação do equipamento por técnico credenciado, e demais hipóteses listadas no regulamento assinado no ato da contratação.",
  },
  {
    title: "Como acionar",
    body: "Contato imediato com a central 24h pelo app ou telefone. A central confirma a ocorrência, registra o horário e inicia o processo — de recuperação em campo ou, se aplicável, de apuração da indenização.",
  },
  {
    title: "Prazo de pagamento da indenização",
    body: "Contado a partir da conclusão da apuração e da entrega da documentação exigida (boletim de ocorrência e demais itens do regulamento). O prazo exato em dias corridos está publicado no contrato — não fazemos essa promessa aqui sem o número auditado.",
  },
];

export default function Garantia() {
  return (
    <div className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-[800px]">
        <EyebrowPill>Garantia RasterMais</EyebrowPill>
        <h1 className="mt-4 text-[var(--text-3xl)] font-extrabold">Regulamento da garantia, em linguagem clara</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Antes de contratar, leia exatamente o que está e o que não está coberto. Nenhuma cláusula fica só no PDF do
          contrato.
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((s) => (
            <div key={s.title} className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-6">
              <h2 className="font-[var(--font-display)] text-[var(--text-lg)] font-bold">{s.title}</h2>
              <p className="mt-2 text-[var(--text-sm)] text-[var(--text-secondary)]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[var(--radius-lg)] border border-dashed border-[var(--border-strong)] p-6">
          <h2 className="font-[var(--font-display)] font-bold">Certificado digital verificável</h2>
          <p className="mt-2 text-[var(--text-sm)] text-[var(--text-secondary)]">
            Cada apólice terá um identificador único, consultável publicamente nesta página, para qualquer pessoa
            confirmar que a cobertura é real e está ativa. Funcionalidade em desenvolvimento — ver backlog em
            RESUMO.md.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <Button as={Link} to="/planos">
            Ver planos com garantia
          </Button>
        </div>
      </div>
    </div>
  );
}
