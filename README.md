# 🚀 Calculadora de Órbitas Espaciais

Uma aplicação web interativa que resolve o **Desafio da Astronauta**, baseado no famoso **Problem #1 do Project Euler**.

## 🎯 Sobre o Desafio

Este projeto foi inspirado pelo [Problem #1 do Project Euler](https://projecteuler.net/problem=1):

> **Multiples of 3 or 5**
> 
> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
> 
> Find the sum of all the multiples of 3 or 5 below 1000.

### 🌌 Contextualização Temática

Transformamos este desafio matemático em uma missão espacial onde:
- Uma jovem astronauta precisa calcular órbitas válidas ao redor de um planeta
- As órbitas válidas são aquelas cujo número de voltas são múltiplos de 3 ou 5
- O objetivo é encontrar a soma total de voltas abaixo de um limite específico (1000)

## ✨ Características

### 🎨 Design Moderno
- **Interface Glassmorphism**: Container transparente com efeito de vidro
- **Tema Espacial**: Cores ciano e magenta, fontes futurísticas (Orbitron, Exo 2)
- **Background Dinâmico**: Suporte para vídeo em loop cobrindo toda a tela
- **Animações Suaves**: Efeitos de brilho, transições e hover states

### 📱 Totalmente Responsivo
- **Desktop**: Container fixo no lado esquerdo da tela
- **Mobile**: Layout adaptativo com botões empilhados verticalmente
- **Flexbox**: Distribuição inteligente dos elementos
- **Scroll Personalizado**: Barra de rolagem temática

### 🧮 Funcionalidades Avançadas
- **Cálculo Preciso**: Algoritmo otimizado para encontrar múltiplos de 3 ou 5
- **Validação Completa**: Análise detalhada do processo de cálculo
- **Resultado Interativo**: Exibição passo-a-passo da validação
- **Limite Customizável**: Aceita valores de 1 até 10.000

## 🗂️ Estrutura do Projeto

```
📁 projeto/
├── 📄 index.html          # Estrutura principal da aplicação
├── 🎨 styles.css          # Estilos modernos e responsivos
├── ⚡ script.js           # Lógica do algoritmo e interações
├── 📖 README.md           # Documentação do projeto
├── 🎬 assets/
│   └── background.mp4     # Vídeo de background (espaço)
└── 🖼️ favicon.ico         # Ícone do site
```

## 🚀 Como Usar

1. **Preparação dos Arquivos**:
   - Coloque o vídeo de background na pasta `assets/background.mp4`
   - Adicione o favicon.ico na raiz do projeto

2. **Execução**:
   - Abra o `index.html` em qualquer navegador moderno
   - Digite um número limite (ex: 1000)
   - Clique em "CALCULAR" para ver o resultado

3. **Recursos Interativos**:
   - **Enter**: Executa o cálculo
   - **Botão RETORNAR**: Limpa os resultados
   - **Scroll**: Navega pelos resultados detalhados

## 🧮 Solução Matemática

### Algoritmo
```javascript
// Para cada número de 1 até limite-1:
for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
```

### Exemplo (limite = 10):
- **Múltiplos de 3**: 3, 6, 9
- **Múltiplos de 5**: 5
- **Múltiplos de ambos**: (nenhum abaixo de 10)
- **Lista completa**: [3, 5, 6, 9]
- **Soma**: 3 + 5 + 6 + 9 = **23**

### Resposta para 1000:
- **Resultado**: **233.168 voltas**
- **Total de números**: 466 órbitas válidas

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Flexbox para layouts responsivos
  - Backdrop-filter para efeitos de transparência
  - Animações CSS keyframes
  - Media queries para responsividade
- **JavaScript ES6+**:
  - Arrow functions
  - Template literals
  - Modern DOM manipulation
  - Event handling

## 🌟 Destaques Técnicos

### Efeitos Visuais
- **Glassmorphism**: `backdrop-filter: blur(20px)`
- **Gradientes**: Texto com gradiente ciano-magenta
- **Animações**: Efeito de brilho nos botões a cada 3 segundos
- **Responsividade**: Breakpoints em 768px e 480px

### UX/UI
- **Feedback Visual**: Estados de hover, focus e active
- **Acessibilidade**: Contraste adequado, navegação por teclado
- **Performance**: Vídeo otimizado, animações suaves
- **Validação**: Mensagens de erro claras

## 📊 Análise de Performance

- **Complexidade**: O(n) - Linear
- **Memória**: O(n) - Armazena todos os múltiplos para análise
- **Otimização**: Validação única por iteração
- **Escalabilidade**: Suporta até 10.000 sem impacto na performance

## 🔗 Referências

- [Project Euler - Problem 1](https://projecteuler.net/problem=1)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Glassmorphism](https://css.glass/)
- [Google Fonts - Orbitron & Exo 2](https://fonts.google.com/)

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido com foco em:
- **Código Limpo**: Comentários em português, nomes semânticos
- **Boas Práticas**: Separação de responsabilidades (HTML/CSS/JS)
- **Acessibilidade**: ARIA labels, contraste, navegação por teclado
- **Responsividade**: Mobile-first approach

---

**🚀 Missão Completa!** A astronauta agora pode calcular suas órbitas espaciais com precisão matemática e estilo futurístico!
