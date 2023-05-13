import React, {useState} from "react"

const tabelaIMC=()=>{
  return(
    <table style={{border: "2px solid black"}}>
      <thead style={{backgroundColor: "black", color: "white"}}>
        <tr >
          <th >
            Classificação
          </th>
          <th>
            IMC
          </th>
        </tr>
      </thead>
      <tbody style={{backgroundColor: "pink"}}>
        <tr >
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
  )
}

const fpeso = (p,sp) => {
  return (
    <div>
      <label>
        Peso (kg):
      </label>
        <input 
          type="text" 
          value={p}
          onChange={(e) => sp(e.target.value)} 
        />
    </div>
  )
}

const faltura = (a,sa) => {
  return (
    <div>
      <label>
      Altura (m):
      </label>
        <input 
          type="text" 
          value={a}
          onChange={(e) => sa(e.target.value)} 
        />
    </div>
  )
};

const fcalcular=(p,a,sr) => {
    const calc=()=>{
      sr(p/(a*a))
    }
    return (
      <div>
        <button onClick={calc}>
          Calcular
        </button>
      </div>
    )
};

const fresultado=(r)=>{
  return(
    <div>
      <p> Resultado: {r.toFixed(2)} </p>
    </div>
  )
}

export default function imc() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState(0)

  return (
    <>
    {fpeso(peso,setPeso)}
    {faltura(altura,setAltura)}
    {fcalcular(peso,altura,setResultado)}
    {fresultado(resultado)}
    {tabelaIMC()}
    </>
  );
};