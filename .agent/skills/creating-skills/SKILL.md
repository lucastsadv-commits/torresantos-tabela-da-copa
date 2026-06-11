---
name: creating-skills
description: >
  Generates and validates new Antigravity skills following standardized structural, 
  content, and naming rules. Use when a new capability needs to be modularized 
  or when the user requests to "create a new skill".
---

# Creating Skills

This skill ensures all Antigravity skills are built with a consistent architecture, 
enabling progressive disclosure and efficient token usage.

## Quick Start

1. Identify the domain and name (gerund-based, e.g., `processing-data`).
2. Create folder: `.agent/skills/<name>`.
3. Generate `SKILL.md` with required frontmatter.
4. Run validation: `python scripts/validate_skill.py .agent/skills/<name>`

## Workflow

1. **Define Core Logic**: Determine what the skill will do and its triggers.
2. **Apply Structure**: Follow the mandatory folder layout in [references/skill-creation-rules.md](references/skill-creation-rules.md).
3. **Write Optimized Body**: Keep `SKILL.md` under 500 lines for Level 2 disclosure.
4. **Implement Scripts**: Add Python scripts in `scripts/` for complex operations or validations.
5. **Final Validation**: Pass all checks in the [Validation Checklist](references/skill-creation-rules.md#9-validação-final).

## Advanced Resources
- **Full Ruleset**: See [references/skill-creation-rules.md](references/skill-creation-rules.md) for naming, body structure, and script standards.
- **Workflow Patterns**: See [references/skill-creation-rules.md#6-padrões-de-workflow](references/skill-creation-rules.md#6-padrões-de-workflow).
- **Automation**: Use `scripts/validate_skill.py` to automate quality checks before delivery.
