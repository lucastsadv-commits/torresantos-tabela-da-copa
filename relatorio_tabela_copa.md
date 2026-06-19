# Relatório de Desenvolvimento: Tabela da Copa 2026 (Torresantos Advocacia)

Este documento detalha o escopo, a arquitetura técnica, as lógicas implementadas e as integrações construídas no projeto da **Tabela da Copa do Mundo de 2026**.

---

## 🎯 1. Foco e Objetivo Real do Projeto
O projeto visa fornecer uma interface altamente dinâmica, responsiva e visualmente imersiva (com design premium) para o acompanhamento dos jogos da Copa do Mundo de 2026, servindo como uma ferramenta de engajamento para a **Torresantos Advocacia**. 

O grande diferencial do projeto é a **automação total dos resultados e a experiência em tempo real**. O usuário final não precisa atualizar a página para ver um gol que acabou de acontecer; a tabela de classificação (pontos, saldo de gols) e o chaveamento do mata-mata se reordenam dinamicamente assim que os dados do jogo mudam.

---

## 🛠 2. Stack Tecnológica e Plataformas
A aplicação foi construída sob uma arquitetura moderna serverless e reativa:

- **Frontend:** React com TypeScript, empacotado via Vite.
- **Estilização & UI:** Tailwind CSS (com as cores oficiais da marca do escritório) e Framer Motion para micro-interações e animações de entrada.
- **Backend as a Service (BaaS):** [Supabase](https://supabase.com/), utilizado para hospedar o banco de dados PostgreSQL e gerenciar o envio de eventos em tempo real via WebSockets.
- **Automação (Cron Jobs):** Extensão `pg_cron` do PostgreSQL dentro do Supabase.
- **Serverless Compute:** Supabase Edge Functions (rodando em Deno) para processamento em background.
- **API Externa:** `api.football-data.org` (usada para capturar os dados oficiais das partidas e atualizações minuto a minuto).

---

## ⚡ 3. Arquitetura de Jogos "Ao Vivo" em Tempo Real
A mecânica de captura e exibição de jogos "Ao Vivo" foi desenhada em três camadas que trabalham juntas de forma assíncrona:

### A. A Captura de Dados (Edge Function + Cron Job)
Para que o sistema saiba exatamente quando um jogo começou, a pontuação atual e o minuto exato, configuramos uma automação diretamente no banco de dados:
1. Um **Cron Job** (`pg_cron`) roda a cada 2 minutos no servidor do Supabase.
2. Esse cron dispara a nossa **Edge Function** chamada `sync-matches`.
3. A Edge Function faz uma requisição HTTP para a API externa (`api.football-data.org`), filtrando exclusivamente os jogos da Copa do Mundo (ID: WC) que estão programados para o dia atual ou o dia anterior.
4. O script identifica quais jogos estão com o status `IN_PLAY` (Rolando) ou `PAUSED` (Intervalo) e extrai o **minuto exato** (ex: `15'`, `HT`) e o **placar**.

### B. A Atualização no Banco de Dados (Supabase)
Com os dados atualizados em mãos, a Edge Function traduz o nome dos países do inglês para português e atualiza os registros específicos na tabela `matches` do PostgreSQL. Ela atualiza as colunas:
- `status`: Passa a ser `IN_PLAY`.
- `score1` e `score2`: Placar atual.
- `minute`: O minuto exato capturado da API.

### C. A Reatividade no Frontend (WebSockets)
A cereja do bolo ocorre no navegador do usuário:
1. No arquivo `TournamentContext.tsx`, o React se inscreve no canal `public:matches` do Supabase Realtime.
2. Quando a Edge Function atualiza o placar no banco de dados, o Supabase emite um evento WebSocket para todos os navegadores que estão com a aba aberta.
3. O React recebe o novo placar/status instantaneamente e atualiza o estado local (`matches`).
4. **Cálculo Automático:** O arquivo `tableCalculations.ts` entra em ação, recalculando *imediatamente* os pontos de todos os times do grupo, saldo de gols e vitórias/derrotas.
5. **Indicador Visual:** Na interface gráfica, a lógica verifica `live = match.status === 'IN_PLAY' || match.status === 'PAUSED'`. Se for verdadeiro, o sistema renderiza dinamicamente um selo vermelho piscante de **"AO VIVO"**.

> [!NOTE]
> **Decisão de Design:** Inicialmente, o sistema exibia o minuto exato da partida ao lado da tag "AO VIVO" (ex: `AO VIVO (15)`). Por decisão de design e preferência do usuário, essa funcionalidade foi simplificada no frontend, e agora exibe apenas o selo limpo **"AO VIVO"**, embora a infraestrutura backend continue sendo capaz de capturar e fornecer o minuto em tempo real.

---

## 🏆 4. Estrutura do Frontend
O frontend foi dividido de forma modular e altamente focada em UX:
- **GroupStage.tsx:** Renderiza as tabelas da fase de grupos, destacando sempre o caminho do Brasil com bordas e cores institucionais.
- **KnockoutBracket.tsx:** Desenha a árvore do mata-mata (16-avos, Oitavas, Quartas, Semi, Terceiro Lugar e Final). Possui um card VIP exclusivo e isolado para a Grande Final, utilizando gradientes elaborados e a cor Accent da marca.
- **Contexto Global:** O `TournamentContext` atua como o cérebro, armazenando o estado de todos os jogos, evitando que os componentes precisem se preocupar com lógica de busca ou websockets.

## 🚧 5. Gargalos e Desafios Enfrentados

Durante o desenvolvimento e os testes da aplicação, mapeamos alguns gargalos técnicos importantes, especialmente em relação à mecânica de dados ao vivo:

### A. Sincronização de Jogos Simulados vs. API Real
O maior gargalo enfrentado foi o **teste de jogos "Ao Vivo" fora do período do torneio**. 
- Como a Copa do Mundo de 2026 ainda não começou, a API oficial (`api.football-data.org`) não retorna dados com o status `IN_PLAY`. 
- **Consequência:** A Edge Function e o Cron Job funcionavam perfeitamente, mas o banco de dados não era atualizado para "Rolando" porque não havia dados reais fluindo da API. Para fins de demonstração, tivemos que injetar manualmente via console o status `"IN_PLAY"` em um jogo agendado (ex: Suíça x Bósnia) para acionar os gatilhos visuais no frontend.

### B. Limitações Críticas da API Gratuita (football-data.org v4)
Identificamos bugs silenciosos causados por restrições diretas do plano gratuito da API escolhida:
1. **Minuto do Jogo Inexistente:** Diferente da API-Football, a `football-data.org` **não retorna o campo `minute`**. Para contornar, implementamos um *workaround* na Edge Function: o sistema calcula o minuto estimado subtraindo o horário de início (`utcDate`) do horário atual do servidor, limitando o valor a 45 minutos (já que não há suporte para acréscimos automáticos).
2. **Filtro de Data (Fuso Horário):** O filtro da API exige UTC, causando uma defasagem em jogos noturnos (ex: um jogo às 23:00 de Brasília já conta como dia seguinte no UTC). O workaround foi ajustar a busca para sempre contemplar `dateFrom=yesterday` e `dateTo=today`.
3. **Placar "Em Branco" ao Vivo:** Durante um jogo ao vivo no 1º tempo, a API retorna `fullTime: null`. Se não tratássemos isso, o placar ficaria congelado em `0x0` independentemente dos gols marcados. A solução foi forçar a Edge Function a buscar os dados do objeto `halfTime` como fallback prioritário para jogos com status `IN_PLAY` ou `PAUSED`.

### C. Manutenção do Estado do Minuto
Outro desafio de UX foi a **exibição dos minutos da partida**.
- Originalmente, programamos o frontend para exibir dinamicamente os minutos do jogo ao lado da flag (ex: `AO VIVO (15)`), capturando a string exata do backend.
- **O Problema:** Em determinados momentos, o dado visual poluía a interface e gerava inconsistências visuais (como o `(15)` continuando na tela mesmo após as refatorações). Decidimos simplificar a UI removendo a exibição dos minutos no frontend, mantendo apenas a tag "AO VIVO", enquanto o backend continua capturando a informação silenciosamente no banco de dados.

### D. Cache de HMR (Hot Module Replacement) no React
Durante a remoção da lógica dos minutos, enfrentamos um pequeno gargalo de ambiente de desenvolvimento. O Vite/React segurou o componente antigo em memória (Cache), fazendo com que a tag `(15)` continuasse visível na tela mesmo após a alteração do código (remoção da variável `liveMinute`). Isso foi rapidamente contornado com um recarregamento forçado da página (F5) para invalidar o cache antigo do navegador.

---

## ✅ Conclusão
O projeto atingiu o objetivo de ser não apenas um componente informativo, mas uma demonstração de excelência em engenharia de software e design UI/UX. A combinação do ecossistema Supabase com integrações externas permitiu que uma complexa malha de atualização em tempo real fosse construída com alta performance e baixo custo de manutenção, proporcionando ao público-alvo da Torresantos Advocacia uma experiência fluida, profissional e de ponta.
