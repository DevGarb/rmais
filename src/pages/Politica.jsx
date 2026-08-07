const content = {
  privacidade: {
    title: "Política de Privacidade",
    body: "Texto legal pendente de revisão jurídica antes da publicação final. Vai cobrir: dados coletados, finalidade, base legal (LGPD), tempo de retenção, direitos do titular e canal de contato do encarregado (DPO).",
  },
  termos: {
    title: "Termos de Uso",
    body: "Texto legal pendente de revisão jurídica antes da publicação final. Vai cobrir: condições de uso do app e do site, regras de cadastro, limitação de responsabilidade e foro.",
  },
};

export default function Politica({ variant }) {
  const data = content[variant];
  return (
    <div className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[var(--text-3xl)] font-extrabold">{data.title}</h1>
        <p className="mt-4 text-[var(--text-secondary)]">{data.body}</p>
      </div>
    </div>
  );
}
