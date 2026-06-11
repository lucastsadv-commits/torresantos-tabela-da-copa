---
description: Gera imagens fotorrealistas e assets visuais de alta qualidade usando Gemini.
---

Para usar esta skill, siga estes passos:

1. **Defina o Objetivo**: O que a imagem deve representar? (Ex: Fundo de Hero, Foto de Perfil, Asset de Autoridade).
2. **Ative o Especialista**: Use a skill `gemini-image-gen` para estruturar o prompt.
3. **Execute a Ferramenta**: Chame o `generate_image` com as diretivas de estilo premium (iluminação cinematográfica, 8k, bokeh).
4. **Validação Visual**: Verifique se a imagem gerada condiz com a paleta do projeto no `index.css`.

// turbo
5. Se o usuário fornecer apenas uma descrição simples, refine o prompt automaticamente para o padrão "Premium Legal Aesthetics" antes de gerar.
