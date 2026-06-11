# Skill Creation Rules

## 1. Folder Structure
- `.agent/skills/name-da-skill/`
- `├── SKILL.md` (mandatory)
- `├── scripts/` (optional)
- `├── references/` (optional)
- `└── assets/` (optional)
- **NEVER create**: `README.md`, `CHANGELOG.md`, `INSTALLATION_GUIDE.md`.

## 2. SKILL.md — YAML Frontmatter
```yaml
---
name: nome-da-skill
description: O que a skill faz e quando usar, em terceira pessoa.
---
```
- **Name**: Max 64 chars, lowercase, numbers, hyphens. No "anthropic" or "claude". Use gerunds (`reviewing-code`).
- **Description**: Max 1024 chars, 3rd person, include WHAT + WHEN + Keywords.

## 3. Body Standards
- Max 500 lines (move excess to `references/`).
- Imperative voice.
- 1-level deep references only.

## 4. Progressive Disclosure
- Level 1: `name` + `description` (Always loaded)
- Level 2: `SKILL.md` body (<5k tokens, loaded on activation)
- Level 3: `scripts/`, `references/`, `assets/` (On-demand)

## 5. Degrees of Freedom
- **High**: Text-based, context dependent (Code review).
- **Medium**: Pseudocode with parameters (Reports).
- **Low**: Exact scripts (Migrations).

## 6. Workflow Patterns
- **Sequential**: Step 1 -> Step 2 -> Step 3.
- **Conditional**: If X do A, else do B.
- **Validation Loop**: Step -> Validate -> Fix (if fail) -> Repeat.

## 7. Script Standards
- Must solve problems, not delegate.
- Explicit error handling (try/except).
- No magic numbers.
- Forward slashes in paths.

## 8. Output Patterns
- **Template Strict**: Exact JSON/Format.
- **Template Flexible**: Suggested base structure.
- **Examples Pattern**: Input/Output pairs.

## 9. Final Validation Checklist
- [ ] name follows rules.
- [ ] description in 3rd person.
- [ ] SKILL.md < 500 lines.
- [ ] No extra files.
- [ ] 1st level references only.
- [ ] Scripts solve problems.
- [ ] Explicit error handling.
- [ ] Progressive disclosure applied.
