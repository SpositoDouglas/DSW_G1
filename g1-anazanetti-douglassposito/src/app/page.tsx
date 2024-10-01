"use client"; 
import { useState } from 'react';
import { Funcionario } from '../models/Funcionario';
import { Gerente } from '../models/Gerente';
import { Diretor } from '../models/Diretor';


export default function Home() {
  const [nome, setNome] = useState('');
  const [tempoDeEmpresa, setTempoDeEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [salario, setSalario] = useState('');
  const [funcionarios, setFuncionarios] = useState([
    { nome: "Ana", tempoDeEmpresa: 5, cargo: "Funcionario", salario: 5000 },
    { nome: "Beto", tempoDeEmpresa: 5, cargo: "Funcionario", salario: 5000 }
  ]);

  function criarFuncionario(): void {
    if (nome && tempoDeEmpresa && salario) {
      let novoFuncionario;
      if (cargo === "Funcionario") {
        novoFuncionario = new Funcionario(nome, Number(tempoDeEmpresa), cargo, Number(salario));
      } else if (cargo === "Gerente") {
        novoFuncionario = new Gerente(nome, Number(tempoDeEmpresa), cargo, Number(salario));
      } else if (cargo === "Diretor") {
        novoFuncionario = new Diretor(nome, Number(tempoDeEmpresa), cargo, Number(salario));
      }
      if (novoFuncionario) {
        setFuncionarios([...funcionarios, novoFuncionario]);
      }
    } else {
      console.log("Preencha todos os campos corretamente.");
    }
  }

  return (
    <div id="Cadastro">
      <div id="formConteiner">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Tempo de Empresa"
          value={tempoDeEmpresa}
          onChange={(e) => setTempoDeEmpresa(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Salario"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
        /><br />

        <button onClick={criarFuncionario}>Adicionar</button>

        {/* Renderizando a lista de funcionários */}
        <ul>
          {funcionarios.map((funcionario, index) => (
            <li key={index}>
              {funcionario.nome} - {funcionario.tempoDeEmpresa} anos - {funcionario.cargo} - R${funcionario.salario}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}