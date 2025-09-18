// Elementos do DOM
const limitInput = document.getElementById('limit-input');
const calculateBtn = document.getElementById('calculate-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');

// Função principal para calcular a soma dos múltiplos de 3 ou 5
function calculateMultiplesSum(limit) {
  // Validação do input
  if (!limit || limit <= 0 || limit > 10000) {
    return {
      isValid: false,
      error: 'Por favor, insira um número válido entre 1 e 10.000'
    };
  }

  const multiples = [];
  let sum = 0;
  const multiplesOf3 = [];
  const multiplesOf5 = [];
  const multiplesOfBoth = [];

  // Encontrar todos os múltiplos de 3 ou 5 abaixo do limite
  for (let i = 1; i < limit; i++) {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;

    if (isMultipleOf3 || isMultipleOf5) {
      multiples.push(i);
      sum += i;

      // Categorizar os múltiplos para análise detalhada
      if (isMultipleOf3 && isMultipleOf5) {
        multiplesOfBoth.push(i);
      } else if (isMultipleOf3) {
        multiplesOf3.push(i);
      } else if (isMultipleOf5) {
        multiplesOf5.push(i);
      }
    }
  }

  return {
    isValid: true,
    limit,
    multiples,
    sum,
    multiplesOf3,
    multiplesOf5,
    multiplesOfBoth,
    totalCount: multiples.length
  };
}

// Função para exibir o resultado detalhado
function displayResult(result) {
  if (!result.isValid) {
    resultContent.innerHTML = `
            <div class="calculation-step">
                <strong>❌ Erro:</strong> ${result.error}
            </div>
        `;
    return;
  }

  const { limit, multiples, sum, multiplesOf3, multiplesOf5, multiplesOfBoth, totalCount } = result;

  // Mostrar primeiros elementos de cada categoria para análise
  const firstMultiplesOf3 = multiplesOf3.slice(0, 10);
  const firstMultiplesOf5 = multiplesOf5.slice(0, 10);
  const firstMultiplesOfBoth = multiplesOfBoth.slice(0, 10);

  resultContent.innerHTML = `
        <div class="calculation-step">
            <strong>🎯 Missão:</strong> Encontrar a soma de todos os múltiplos de 3 ou 5 abaixo de ${limit}
        </div>
        
        <div class="calculation-step">
            <strong>📊 Análise dos Múltiplos:</strong><br>
            • Múltiplos apenas de 3: ${multiplesOf3.length} números<br>
            • Múltiplos apenas de 5: ${multiplesOf5.length} números<br>
            • Múltiplos de ambos (3 e 5): ${multiplesOfBoth.length} números<br>
            • <strong>Total de números encontrados: ${totalCount}</strong>
        </div>

        <div class="calculation-step">
            <strong>🔍 Primeiros Múltiplos Encontrados:</strong><br>
            • Múltiplos de 3: ${firstMultiplesOf3.join(', ')}${multiplesOf3.length > 10 ? '...' : ''}<br>
            • Múltiplos de 5: ${firstMultiplesOf5.join(', ')}${multiplesOf5.length > 10 ? '...' : ''}<br>
            • Múltiplos de ambos: ${firstMultiplesOfBoth.join(', ')}${multiplesOfBoth.length > 10 ? '...' : ''}
        </div>

        <div class="calculation-step">
            <strong>⚡ Validação do Cálculo:</strong><br>
            Soma dos múltiplos de 3: ${multiplesOf3.reduce((acc, num) => acc + num, 0)}<br>
            Soma dos múltiplos de 5: ${multiplesOf5.reduce((acc, num) => acc + num, 0)}<br>
            Soma dos múltiplos de ambos: ${multiplesOfBoth.reduce((acc, num) => acc + num, 0)}<br>
            <strong>Soma total verificada: ${sum}</strong>
        </div>

        <div class="calculation-step">
            <strong>🧮 Fórmula Aplicada:</strong><br>
            Soma = (Múltiplos de 3) + (Múltiplos de 5) - (Múltiplos duplicados de 3 e 5)<br>
            Todos os números: [${multiples.slice(0, 20).join(', ')}${
    multiples.length > 20 ? `... e mais ${multiples.length - 20} números` : ''
  }]
        </div>

        <div class="final-result">
            🚀 RESULTADO DA MISSÃO 🚀<br>
            A astronauta pode somar <strong>${sum} voltas</strong> em suas órbitas!<br>
            <small>Baseado em ${totalCount} órbitas válidas abaixo de ${limit}</small>
        </div>
    `;
}

// Função para limpar o resultado
function clearResult() {
  resultSection.classList.remove('show');
  resultContent.innerHTML = '';
  limitInput.value = '';
  limitInput.focus();
}

// Event listeners
calculateBtn.addEventListener('click', function () {
  const limit = parseInt(limitInput.value);
  const result = calculateMultiplesSum(limit);

  displayResult(result);
  resultSection.classList.add('show');

  // Scroll suave até o resultado
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
});

returnBtn.addEventListener('click', clearResult);

// Permitir cálculo com Enter
limitInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    calculateBtn.click();
  }
});

// Configurar valor padrão para demonstração
window.addEventListener('load', function () {
  limitInput.value = '1000';
  limitInput.focus();
});
