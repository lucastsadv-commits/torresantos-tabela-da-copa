---
description: Sincroniza as skills e workflows globais do Skill Master para o projeto atual.
---

Este workflow copia as skills e comandos configurados no seu repositório central (**Skill Master**) para o projeto onde você está trabalhando agora.

### Como usar:
Basta me pedir para "Sincronizar skills globais" em qualquer novo projeto.

### Ações:
// turbo
1. Criar diretórios necessários:
   `mkdir -p .agent/skills .agent/workflows`

// turbo
2. Copiar as skills:
   `cp -r "/Users/alysson/Documents/Lucas TSADV/Projects Antigravity - LP'S/Skill Master/.agent/skills/"* .agent/skills/`

// turbo
3. Copiar os workflows (comandos slash):
   `cp -r "/Users/alysson/Documents/Lucas TSADV/Projects Antigravity - LP'S/Skill Master/.agent/workflows/"* .agent/workflows/`

4. Finalização:
   Confirmar que os comandos `/oab`, `/coder` e `/designer` estão prontos para uso.
