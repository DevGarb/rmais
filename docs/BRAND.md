# RasterMais — Sistema de Marca Derivado

Fonte: `src/assets/brand/logo-fundo-claro.png` (versão sobre fundo claro) e `src/assets/brand/logo-fundo-escuro.png` (versão sobre fundo escuro/transparente, com "Raster" em branco).

## 0.5 Changelog de derivação

| Decisão do sistema | Origem no anexo | Regra aplicada | Default sobrescrito |
| --- | --- | --- | --- |
| `brand/signal` = laranja `#F58634` | Cor do pin de localização e da metade "Mais" do wordmark | Maior contraste/saturação do arquivo (HSL 25.5° 91% 58%), usada em elemento de ação (pin) | Amarelo `#FCDF00` |
| `brand/primary` (base neutra) = preto quente `#201E1E` | Metade "Raster" do wordmark | Cor dominante de texto/estrutura do logo | Preto `#010101` |
| `neutral-500` = cinza `#606062` | Faixa "RASTREAMENTO VEICULAR" | Amostrado direto do PNG | — (não havia default) |
| Tema escuro é viável como default operacional | `TOPO SITE.png` mostra "Raster" em branco puro sobre fundo transparente — o logo tem variante clara desenhada para fundo escuro | Logo funciona nos dois fundos; escuro escolhido como operacional (uso ao volante), claro como institucional (área logada) | Nenhum (documento já previa dark-first condicional) |
| Raio de canto generoso, sem chanfro | Símbolo é um pin/teardrop com furo circular perfeito — geometria 100% curva, nenhum corte reto ou ângulo agudo | DNA de forma arredondado → sistema usa `border-radius` em vez de corte/chanfro em botões, cards, inputs | Chanfro técnico (`{{ANGULO_CHANFRO}}`) — não aplicado, campo declarado N/A |
| Arquétipo: Protetor/Guardião com camada de Herói (ação) | Forma arredondada e amigável = Protetor; laranja saturado no pin (ponto de ação/alerta) = Herói/resposta | Regra da seção 3: "logo arredondado e institucional puxa Protetor/Cuidador" | Tensão pura Protetor x Herói (documento genérico) |
| DISPLAY = Poppins (geométrica, semi-arredondada) | Wordmark tem terminais retos com curvas geométricas (bojo do "R", contraconta do "a" circular, ponto do "i" redondo) — família parente mais próxima disponível no mercado | Classificação geométrica/humanista arredondada, peso 600–800 | Chakra Petch (técnica/chanfrada) — não combina com geometria curva do logo |
| `signal/text` no tema claro = `signal-700`, não `signal-600` | — (decisão de acessibilidade, não do logo) | `signal-600` sobre `neutral-0` mede 3.29:1, reprova AA texto pequeno (4.5:1). `signal-700` mede 4.87:1, aprova. Cor oficial do logo preservada em `signal/ui` (bordas, ícones, headline grande) | — |

## Relatório de Leitura de Marca

**Nomenclatura.** "RasterMais", uma palavra composta, sem espaço, com troca de peso/cor no meio (câmbio "Raster" → "Mais"). Em copy corrida: **RasterMais**, sempre junto, R e M maiúsculos (camelCase de marca). Descritor fixo abaixo do wordmark: "RASTREAMENTO VEICULAR", caixa alta, dentro de pílula cinza — funciona como subtítulo de categoria, não como tagline emocional. Não há tagline emocional no anexo; a categoria descritiva já cumpre esse papel.

**Estrutura do logo.** Lockup horizontal: pin (símbolo) centrado sobre o "M" de "Mais", acima da linha do wordmark, funcionando como ponto no "i" ampliado / marcador de localização. Wordmark "Raster" + "Mais" no mesmo peso e desenho, diferenciados só por cor. Pílula com o descritor, ancorada abaixo, largura menor que o wordmark. Faltam no anexo: símbolo isolado (favicon/app icon) e versão vertical/empilhada — **propostos por derivação**: favicon = pin sozinho, redesenhado em traço único, sem o furo vazado ficando ilegível em tamanho pequeno (usar furo proporcionalmente maior); versão vertical = pin acima, wordmark completo abaixo, pílula opcional removida em contextos de app icon.

**Paleta amostrada** (extração direta de pixel do PNG):

| Cor | HEX | Função | Proporção no logo |
| --- | --- | --- | --- |
| Laranja | `#F58634` | Sinal — pin + metade do wordmark ("Mais") | ~44% da tinta |
| Preto quente | `#201E1E` | Base — metade do wordmark ("Raster") | ~35% da tinta |
| Cinza neutro | `#606062` | Secundária — faixa do descritor | ~21% da tinta |

**Geometria e DNA de forma.** Zero ângulos agudos. Pin = teardrop com topo perfeitamente circular e furo circular concêntrico — proporção de vazio generosa (o furo é ~45% do diâmetro do círculo superior). Wordmark com terminais retos mas contracontas (counters) redondas — letras como "a", "e", "s" fecham em curva, não em quina. Pílula do descritor com raio total (cápsula). Conclusão: sistema deriva um **raio de canto grande e consistente**, nunca chanfro reto.

**Personalidade tipográfica.** Geométrica com suavização — bojo do "R" fechado e circular, "t" com haste reta mas topo curvo, ponto do "i" perfeitamente redondo, "M" central com vértice levemente arredondado em vez de agudo. Peso: Bold/ExtraBold. Sem itálico, sem condensado. Parente de mercado mais próximo: **Poppins** (peso 600–800) para DISPLAY. A pílula do descritor usa uma grotesca reta e mais neutra, com leve tracking — papel que já é coberto pela família TEXTO/UI do sistema (Inter, em versão caixa-alta com tracking para eyebrows/badges).

**Temperatura e registro.** Quente (laranja) sobre neutro frio-escuro (preto levemente acinzentado). Registro operacional-institucional: sério o suficiente para transmitir confiança financeira (indenização), quente o suficiente para não parecer seguradora burocrática. Não é agressivo/tático (sem vermelho, sem angulação de HUD militar); é **responsivo e humano** — pin de localização como metáfora central, não mira ou alvo.

## Plataforma de marca

**Posicionamento.** RasterMais é a operação que responde — recuperação ativa em campo com garantia financeira de até 100% da tabela FIPE, sem a letra miúda da seguradora e sem a fragilidade jurídica da associação.

**Promessa central com risco reverso.** "Seu veículo recuperado, ou você indenizado em até 100% da FIPE — com prazo e regras publicados, não prometidos." (número de prazo exato entra quando houver SLA real a publicar — ver seção Garantia, regra de "todo número tem fonte").

**Arquétipo.** Protetor/Guardião como base (forma arredondada, cor quente, pin como "estou de olho"), com camada de Herói ativado no momento de crise (equipe tática, resposta em campo) — a tensão vive na jornada: Protetor no dia a dia (app, monitoramento), Herói no momento do sinistro (recuperação).

**Tom de voz.** Direto, sem juridiquês. Fala de controle e autonomia — nunca de medo ou vulnerabilidade. Frases curtas, verbo de ação. Evitar: "você pode ser a próxima vítima". Preferir: "seu carro, sob seu controle, 24h".

**Sistema de nomenclatura** (todas foneticamente compatíveis com o sufixo "-Mais" já estabelecido pelo nome-mãe):

| Item | Opção 1 | Opção 2 | Opção 3 |
| --- | --- | --- | --- |
| `{{NOME_APP}}` | **ControleMais** — nomeia o benefício central (controle na palma da mão) | RotaMais — foco em rastreamento/trajeto | AppMais — neutro, direto |
| `{{NOME_SELO}}` | **GarantiaMais** — nomeia literalmente o produto financeiro | ProtegeMais — tom mais emocional | SeloMais — genérico, reforça "selo verificável" |
| `{{NOME_EQUIPE}}` | **RespondeMais** — reforça a promessa de resposta rápida | ForçaMais — tom tático | TáticaMais — mais técnico, menos humano |
| `{{NOME_INDICE}}` | **RiscoMais** — direto, SEO-friendly ("índice de risco") | MapaMais — foco geográfico | ÍndiceMais — literal, mais institucional |

Recomendação: coluna 1 em cada linha — todas mantêm o padrão `[Palavra-benefício]Mais`, idêntico ao próprio nome-mãe, e são as mais fortes para SEO (buscas literais: "controle mais rastreador", "garantia mais fipe").

**Pilares de prova** (cada um precisa de evidência exibível antes de publicar — hoje nenhum tem número real, então entram como estrutura, não como claim):

1. Operação verticalizada (central + campo + app, não terceirizado) — evidência: fotos reais da central/equipe, não banco de imagem.
2. Tempo de resposta — evidência: SLA visual (seção 7 do briefing), precisa de dado real de operação para publicar.
3. Cobertura — evidência: mapa de lojas/regiões atendidas, dado real de endereços.
4. Lastro financeiro da garantia — evidência: regulamento público + CNPJ + registro, não só texto de marketing.

**Regra de credibilidade:** nenhum desses quatro pilares tem número aprovado para publicação ainda — são placeholders estruturais no código (ver `src/components/StatBar.jsx`) até a operação fornecer os dados reais e a fonte/metodologia de cada um.

## Validação WCAG (seção 0.6)

Contraste calculado (fórmula WCAG 2.1, luminância relativa):

| Par | Contraste | Resultado |
| --- | --- | --- |
| `text-signal` (laranja `signal-500`) sobre `surface-base` escuro | 7.72:1 | Aprova AA e AAA, texto de qualquer tamanho |
| `text-primary` (branco quente) sobre `surface-base` escuro | 18.51:1 | Aprova AAA |
| `text-secondary` (cinza claro) sobre `surface-base` escuro | 7.83:1 | Aprova AAA |
| Botão primário: texto escuro sobre `signal-500` (tema escuro) | 7.72:1 | Aprova AAA |
| `signal-600` sobre `surface-base` claro | 3.29:1 | **Reprova AA texto pequeno.** Aprova só UI/gráfico (≥3:1) e texto grande (≥24px ou 18.66px bold) |
| `signal-700` sobre `surface-base` claro (= `text-signal` no tema claro) | 4.87:1 | Aprova AA texto pequeno |
| `text-primary` (preto quente) sobre `surface-base` claro | 16.60:1 | Aprova AAA |

**Proibido:** usar `signal-600`/`--signal-ui` como cor de texto corrido no tema claro (badges pequenos, links inline, legendas) — só como borda, ícone, preenchimento de gráfico ou headline grande. Para texto pequeno em laranja no tema claro, usar sempre `--text-signal` (que resolve para `signal-700`).

## Teste de estresse (item pendente — backlog wave 2)

Ainda não aplicado: substituir o logo por duas marcas fictícias de temperatura oposta (uma fria/institucional azul, uma quente/tática vermelha) sobre o mesmo layout de Home para provar que o sistema de tokens sustenta a troca sem quebrar contraste/hierarquia. Ver `RESUMO.md` → backlog.
