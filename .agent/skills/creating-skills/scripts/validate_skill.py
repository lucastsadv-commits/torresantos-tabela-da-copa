#!/usr/bin/env python3
import os
import sys
import re

def validate_skill(skill_path):
    errors = []
    
    if not os.path.exists(skill_path):
        return [f"Path {skill_path} does not exist."]
    
    skill_md_path = os.path.join(skill_path, "SKILL.md")
    if not os.path.exists(skill_md_path):
        errors.append("Missing mandatory SKILL.md")
    else:
        # Check SKILL.md contents
        with open(skill_md_path, 'r') as f:
            content = f.read()
            
            # Check length
            if len(content.splitlines()) > 500:
                errors.append("SKILL.md exceeds 500 lines. Move details to references/")
            
            # Check frontmatter block
            fm_match = re.search(r'^---\s*\n(.*?)\n---', content, re.DOTALL | re.MULTILINE)
            if not fm_match:
                errors.append("Missing or invalid YAML frontmatter in SKILL.md")
            else:
                fm_text = fm_match.group(1)
                
                # Manual parsing of name and description
                name_match = re.search(r'^name:\s*(.+)$', fm_text, re.MULTILINE)
                desc_match = re.search(r'^description:\s*(.+?)(?=\n\w+:|$)', fm_text, re.DOTALL | re.MULTILINE)
                
                if not name_match:
                    errors.append("Missing 'name' in frontmatter.")
                else:
                    name = name_match.group(1).strip()
                    if not re.match(r'^[a-z0-9-]+$', name):
                        errors.append(f"Invalid skill name: '{name}'. Must be lowercase, numbers, and hyphens.")
                    if len(name) > 64:
                        errors.append(f"Skill name too long: {len(name)} chars (max 64).")
                    if any(x in name.lower() for x in ["anthropic", "claude"]):
                        errors.append("Skill name cannot contain forbidden terms ('anthropic', 'claude').")

                if not desc_match:
                    errors.append("Missing 'description' in frontmatter.")
                else:
                    description = desc_match.group(1).strip()
                    if len(description) > 1024:
                        errors.append("Description exceeds 1024 characters.")
                    # Check for 3rd person (very simple check: doesn't start with "I " or "I'm")
                    if re.match(r'^(I |I\'m|Eu |Vou |Me )', description, re.IGNORECASE):
                        errors.append("Description should be in 3rd person (Avoid 'I', 'Me', etc).")

    # Check for forbidden files
    forbidden = ["README.md", "CHANGELOG.md", "INSTALLATION_GUIDE.md"]
    for root, dirs, files in os.walk(skill_path):
        for file in files:
            if file in forbidden:
                errors.append(f"Forbidden file found: {file}")

    return errors

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python validate_skill.py <path_to_skill_folder>")
        sys.exit(1)
        
    skill_folder = sys.argv[1]
    results = validate_skill(skill_folder)
    
    if results:
        print("❌ Validation failed:")
        for err in results:
            print(f"  - {err}")
        sys.exit(1)
    else:
        print("✅ Skill validation passed!")

