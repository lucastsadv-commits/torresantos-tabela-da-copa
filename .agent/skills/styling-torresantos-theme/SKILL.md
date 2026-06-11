---
name: styling-torresantos-theme
description: Aplica a paleta de cores oficial e os padrões visuais da Torresantos Advocacia. Utiliza as cores Hexadecimais oficiais do escritório para garantir a conformidade da identidade visual em todas as criações frontend.
---

# Styling Torresantos Theme

Aplica a paleta de cores oficial e os padrões visuais da Torresantos Advocacia. Deve ser ativada sempre que você solicitar a criação ou formatação de layouts, componentes ou propriedades de CSS em projetos relacionados ao escritório.

## Paleta de Cores Oficial (HEX)

### Cores Principais
- **Azul Marinho (Primary / Corporate):** `#0A2F57`
- **Laranja (Accent / Action):** `#B35120`

### Tons de Azul Adicionais
- **Azul Muito Escuro:** `#00112E`
- **Azul Médio Vibrante:** `#0C5994`
- **Azul Acinzentado Médio:** `#6A7999`
- **Azul Acinzentado Claro:** `#8698BD`
- **Gelo / Off-White Azulado:** `#D3D6DE`

### Tons de Laranja Adicionais
- **Laranja Queimado / Terra:** `#7A3312`
- **Laranja Brilhante:** `#F56D29`
- **Pêssego / Terracota Médio:** `#D69B74`
- **Pêssego Claro:** `#F7B186`
- **Nude / Fundo Quente:** `#F2E3D7`

## Diretrizes de Aplicação (Tailwind CSS)

Sempre que a skill for invocada ou o contexto for o do escritório Torresantos, certifique-se de configurar o sub-tema ou estender a configuração do CSS Base. 

**Exemplo de mapeamento CSS (`@theme` do Tailwind V4.x):**

```css
@theme {
  /* Cores Principais */
  --color-brand-primary: #0A2F57;
  --color-brand-accent: #B35120;
  
  /* Tons de Azul */
  --color-brand-blue-900: #00112E;
  --color-brand-blue-700: #0C5994;
  --color-brand-blue-500: #6A7999;
  --color-brand-blue-300: #8698BD;
  --color-brand-blue-100: #D3D6DE;

  /* Tons de Laranja */
  --color-brand-orange-900: #7A3312;
  --color-brand-orange-500: #F56D29;
  --color-brand-orange-400: #D69B74;
  --color-brand-orange-300: #F7B186;
  --color-brand-orange-100: #F2E3D7;
}
```

## Regras e Lógica de Interface
1. **Evite Cores Genéricas:** Nunca utilize tonalidades nativas padrão do Tailwind (ex: `blue-600` ou `orange-500`) em elementos da marca. Utilize sempre as variáveis correspondentes.
2. **Textos Principais & Cabeçalhos:** Utilize o Primary (`#0A2F57`) para títulos pesados, assegurando contraste severo, sobriedade institucional e leitura agradável, alinhado à área jurídica.
3. **Calls to Action (CTAs):** Os botões principais devem utilizar a cor Accent (`#B35120`). Tons como o Laranja Brilhante (`#F56D29`) devem ser limitados a estados `hover` ou `focus` das interações.
4. **Fundos de Seção e Layout:** Alterne as seções do site usando Branco Puro (`#FFFFFF`), fundo Base Quente (`#FAFAF9`), Off-White Azulado (`#D3D6DE`) ou Nude (`#F2E3D7`) para criar ritmo sem sobrecarregar a visão com cor vibrante. 
5. **Ações Negativas / Secundárias:** Sempre priorize links de texto simples com sublinhado ou contornos suaves para manter a elegância estética.
