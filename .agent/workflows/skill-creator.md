---
description: Cria e valida novas skills Antigravity seguindo o padrão estrutural e de nomenclatura.
---

Este workflow ativa a skill **Creating Skills** para modularizar novas funcionalidades.

### Passos:
1. **Ativar Skill**: Carregar as diretrizes de `.agent/skills/creating-skills/SKILL.md`.
2. **Setup Estrutural**: Criar o diretório da skill em `.agent/skills/` com os subdiretórios `scripts/`, `examples/` e `resources/`.
3. **Documentação**: Gerar o arquivo `SKILL.md` com frontmatter YAML e corpo em Markdown (máx 500 linhas).
4. **Validação Técnica**: Executar o script de validação:
   ```bash
   python .agent/skills/creating-skills/scripts/validate_skill.py .agent/skills/<nome-da-skill>
   ```
5. **Integração**: Registrar a nova skill para uso imediato pelo `Agent Orchestrator`.
