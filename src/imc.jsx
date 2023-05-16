import React, { useState } from 'react';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Acima do peso');
    } else if (imcCalculado < 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imcCalculado < 39.9) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  return (
    <div>
      <table style={{border: "2px solid black", marginBottom: "20px"}}>
        <thead>
          <tr >
            <th >
              Classificação
            </th>
            <th>
              IMC
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo do peso</td>
            <td>Abaixo de 18,5</td>
          </tr>
          <tr>
            <td>Peso ideal</td> 
            <td>Entre 18,6 e 24,9</td>
          </tr>
          <tr>
            <td>Acima do peso</td>
            <td>Entre 25,0 e 29,9</td>
          </tr>
          <tr>
            <td>Obesidade grau 1</td>
            <td>Entre 30,0 e 34,9</td>
          </tr>
          <tr>
            <td>Obesidade grau 2 </td>
            <td>Entre 35,0 e 39,9</td>
          </tr>
          <tr>
            <td>Obesidade grau 3 </td>
            <td>Acima de 40</td>
          </tr>
        </tbody>
      </table>          
      <form onSubmit={handleSubmit}>
        <label htmlFor="altura">Altura (m):</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
        />

        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      {imc && classificacao && (
        <table style={{border: "2px solid black", marginTop: "20px"}}>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{classificacao}</td>
              <td>{imc}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;