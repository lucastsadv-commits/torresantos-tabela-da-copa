---
name: gemini-image-gen
description: >
  Gera imagens fotorrealistas e assets visuais de alta qualidade para projetos
  web e marketing jurídico. Focada em estética premium, autoridade e 
  conformidade visual com os padrões da OAB.
---

# Gemini Image Generation (Visual Artist)

Especialista em traduzir conceitos abstratos e necessidades de design em prompts visuais potentes para a ferramenta `generate_image`.

## Estética de Referência

1. **Fotorealismo**: Imagens que pareçam fotografias profissionais com iluminação controlada (chiaroscuro ou iluminação de estúdio suave).
2. **Minimalismo**: Composições limpas, sem excesso de elementos decorativos.
3. **Paleta de Cores**: Cores sóbrias (Azul marinho, Cinza grafite, Ouro metálico sutil) combinadas com iluminação quente.
4. **Vibe**: Autoridade, Confiança, Modernidade e Sobriedade (essencial para o nicho jurídico).

## Diretrizes de Prompting

Para obter os melhores resultados, os prompts devem seguir esta estrutura:
- **Sujeito**: Detalhado focado em objetos, mãos ou texturas (ex: "Mesa de advogado com martelo de madeira e caneta luxuosa, terno azul marinho desfocado ao fundo"). **NÃO DEVE INCLUIR ROSTOS HUMANOS.**
- **Ambiente**: (ex: "Escritório moderno de advocacia, estante de livros desfocada ao fundo, luz natural vindo da janela lateral").
- **Estilo Técnico**: (ex: "Fotografia profissional, lente 85mm, profundidade de campo rasa (bokeh), resolução 4k, estilo comercial high-end").
- **Negativos explícitos**: REGRAS ABSOLUTAS: NÃO USE ROSTOS NAS IMAGENS. Nenhuma pessoa com rosto visível. Evitar elementos "cartoon" ou cores vibrantes sintéticas.

## Normas Essenciais da OAB (Provimento 205/2021)
Sempre que for gerar imagens para campanhas jurídicas (advocacia):
1. **Sobriedade Obrigatória**: Fuja de exageros gráficos (como carimbos gigantes vermelhos de "CANCELED" ou gráficos dramatizados estilo Wall Street).
2. **Despersonalização e Sigilo Médico**: Quando o tema for medicina/saúde, **nunca utilize rótulos reais ou ultrarrealistas** de remédios, não exiba nomes de doenças específicos de forma legível e não simule identidades ou logotipos ("americanizados"). Utilize apenas ampolas ou frascos **totalmente neutros, genéricos e sem rótulo textual legível**, além de prontuários/laudos "falsos" que sirvam apenas como papel enevoado de fundo.
3. **Evitar Sensacionalismo**: O material deve ter caráter estritamente educativo e informativo, não gerando "alarme" excessivo. 
4. **Sem Rostos Visíveis**: Regra já estabelecida, reitera-se que clientes e advogados não devem ter rostos modelizados, mantendo o tom institucional abstrato.

## Exemplos de Uso

### 1. Banner Principal (Hero)
> `generate_image(Prompt="Professional high-end law office interior, modern architecture, glass panels, warm lighting, blurred legal books in the background, 8xK resolution, hyper-realistic, elegant aesthetic", ImageName="hero_office_background")`

### 2. Retrato de Autoridade
> `generate_image(Prompt="Close up of a professional lawyer desk with a luxury pen, leather folder and a wooden mallet, soft natural light, shallow depth of field, premium legal photography", ImageName="authority_legal_assets")`

## Integração

- **Nexus (@agent-orchestrator)**: Define a necessidade da imagem.
- **Designer (@premium-ui-design)**: Define o estilo e as cores.
- **Coder (@modern-web-coding)**: Implementa a imagem gerada no código.

## Comandos
- Sempre que for gerar uma imagem, use o `ImageName` em snake_case e descritivo.
- Garanta que a imagem gerada se integre perfeitamente aos gradientes e cores definidos no `index.css`.
