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
