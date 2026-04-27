import { useState } from 'react';
import "./App.css";

// 1. A função tem que estar aqui fora (ou dentro do App)
const calcularModa = (entrada) => {
  if (!entrada) return 0;
  const valores = entrada.split(",").map(v => v.trim());
  const contagem = {};
  let maiorFrequencia = 0;
  let moda = valores[0];

  valores.forEach((valor) => {
    contagem[valor] = (contagem[valor] || 0) + 1;
    if (contagem[valor] > maiorFrequencia) {
      maiorFrequencia = contagem[valor];
      moda = valor;
    }
  });
  return moda;
};

function App() {
  const [vetor, setVetor] = useState('');
  const [moda, setModa] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // 2. Aqui é onde você REALMENTE usa a função
    const resultado = calcularModa(vetor); 
    setModa(resultado);
  };

  const handleChange = (event) => {
    setVetor(event.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={vetor} onChange={handleChange}/>
        <button type="submit">Calcular moda</button>
      </form>
      <p>Resultado da moda: {moda}</p>
    </div>
  );
}

export default App;