---
name: strategic-planning
description: >
  Transforma conceitos e ideias em planos de ação detalhados e técnicos, 
  organizados em tarefas granulares e executáveis.
---

# Strategic Planning

Esta skill foca na "arquitetura do projeto", garantindo que cada passo seja lógico, seguro e verificável antes da execução.

## Princípios Core

1. **Granularidade "Bite-Sized"**: Cada tarefa deve ser pequena o suficiente para ser executada em minutos, não horas.
2. **Contexto Zero**: Escreva o plano como se fosse para um engenheiro que não participou do brainstorming.
3. **Ponto de Verificação**: Defina marcos claros para revisão do usuário.
4. **Alinhamento com Skills**: Sempre mapeie tarefas para as skills disponíveis (ex: `/coder`, `/designer`, `/oab`).

## Estrutura do Plano (PROJECT_BRIEF.md)

Cada plano gerado deve conter:
- **Objetivo do Projeto**: Resumo executivo da visão.
- **Escalação do Time**: Quais skills serão usadas e por quê.
- **Roadmap de Milestones**: Fases principais do projeto.
- **Task List Detalhada**: Lista de comandos e ações técnicas.

## Fluxo de Trabalho

1. **Análise de Requisitos**: Ler o histórico de brainstorming ou as solicitações do usuário.
2. **Draft do Roadmap**: Esboçar as fases principais.
3. **Refinamento Técnico**: Detalhar cada tarefa com os comandos específicos a serem executados.
4. **Revisão de Ética e Segurança**: Verificar se o plano viola alguma regra OAB ou de segurança.
5. **Geração do Arquivo**: Salvar o plano em `PROJECT_BRIEF.md` na raiz do projeto.

## Gatilhos
- Após a conclusão de um `/brainstorming`.
- Quando o usuário pede um "roadmap" ou "plano de execução".
- Ao iniciar integrações complexas.

## Regras de Resposta
- Seja pragmático e direto.
- Use a estrutura do `PROJECT_BRIEF.md` como padrão.
- Sempre pergunte: "Posso prosseguir com a criação do plano oficial?"
