"use client"; 
import { useState } from 'react';
import local from 'next/font/local';

export default function Home() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [salario, setSalario] = useState('');
  return (
    <div id = "Cadastro">
      <div id="formConteiner">
        <input type="text" placeholder ="Nome" id="Nome"></input><br></br>
        <input type="text" placeholder ="Tempo de Empresa" id="tpEmpresa"></input><br></br>
        <input type="text" placeholder ="Cargo" id="cargo"></input><br></br>
        <input type="text" placeholder ="Salario" id="salario"></input><br></br>
        <button>Adicionar</button>
      </div>
    </div>
  );
}

function criarFuncionario():void{
  var nome = document.getElementById("nome");
  var tempoDeEmpresa = document.getElementById("tpEmpresa");
  var cargo = document.getElementById("cargo");
  var salario = document.getElementById("salario");
  if(nome && tempoDeEmpresa&&salario!= null)
    if (cargo.value ="Funcionario"){
      var novoFuncionario = new Funcionario(nome.value,Number(tempoDeEmpresa.value), cargo.value, Number(salario.value));
      novoFuncionario.calculaBonus();
      console.log(novoFuncionario);
    }else if(cargo.value = "Gerente"){
      var novoGerente=  new Gerente(nome.value, Number(tempoDeEmpresa.value), cargo.value, Number(salario.value));
      novoGerente.calculaBonus();
    }else if(cargo.value ="Diretor"){
      var novoDiretor = new Diretor(nome.value, Number(tempoDeEmpresa.value), cargo.value, Number(salario.value));
      novoDiretor.calculaBonus();
    }
}

