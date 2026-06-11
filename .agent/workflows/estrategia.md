---
description: Ativa o CMO Jurídico para definir persona, dor principal e abordagem educacional da campanha.
---

Este workflow ativa a skill **Strategizing Legal Marketing** para criar o posicionamento estratégico da campanha.

### Passos:
1. **Ativar Skill**: Carregar instruções de `.agent/skills/strategizing-legal-marketing/SKILL.md`.
2. **Coleta de Dados**: Solicitar ao usuário a área de atuação jurídica e o problema específico do cliente.
3. **Definição da Persona**: Descrever o perfil detalhado do cliente ideal, seu estado emocional e medos.
4. **Mapeamento da Dor**: Identificar o problema central que mantém esse cliente acordado à noite.
5. **Abordagem Educacional**: Definir que informação jurídica o cliente precisa para sentir confiança.
6. **Output JSON**: Entregar o objeto estratégico `{persona_perfil, dor_principal, abordagem_chave}`.
7. **Transição**: Sugerir o próximo comando `/cro` para estruturar a landing page com base na estratégia.
