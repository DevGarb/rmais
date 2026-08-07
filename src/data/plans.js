// Valores exemplificativos — pendente de aprovação comercial (ver RESUMO.md, backlog onda 1)
export const plans = [
  {
    name: "Essencial",
    description: "Rastreamento e monitoramento 24h para o dia a dia.",
    price: "R$ 49,90",
    features: ["Rastreamento em tempo real", "App RasterMais", "Central de monitoramento 24h", "1 veículo"],
  },
  {
    name: "Proteção Total",
    description: "Rastreamento + garantia de recuperação ou indenização.",
    price: "R$ 79,90",
    features: [
      "Tudo do Essencial",
      "Equipe tática de recuperação em campo",
      "Garantia de indenização até 100% da FIPE",
      "Bloqueio remoto do veículo",
      "1 veículo",
    ],
    highlight: true,
  },
  {
    name: "Frota",
    description: "Para 2 a 20 veículos, com console de gestão.",
    price: "sob consulta",
    features: [
      "Tudo do Proteção Total",
      "Console de gestão de frota",
      "Score de condução por motorista",
      "Relatórios mensais",
      "Gestor de conta dedicado",
    ],
  },
];
