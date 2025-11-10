"use client";
import {useState} from "react";
export default function Lista () {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);
  return (
    <main>
      <h1>TO-DO-LIST</h1>

      <input 
      type="text" placeholder="Digite uma Tarefa: "
      valor = {tarefa}
      onChange = {(e) => setTarefa(e.target.value)}/>
      <br></br>

      <button onClick={() => {
      setLista([...lista, tarefa]);
      setTarefa("");
      }}>
      Adicionar
      </button>
      <ul>
  {   lista.map((item, index) => (
      <li key={index}>{item}</li>
      ))}
      </ul>


    </main>
  );

}
