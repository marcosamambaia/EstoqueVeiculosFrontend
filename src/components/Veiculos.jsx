import React, { useState, useEffect } from "react";
import axios from "axios";

function Veiculos() {
  // Estado para armazenar lista de veículos, marcas e modelos
  const [veiculos, setVeiculos] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);

  // Estado para armazenar os dados do formulário de cadastro
  const [form, setForm] = useState({
    marcaId: "",
    modeloId: "",
    ano: "",
    cor: "",
    preco: "",
    quilometragem: "",
    status: "Disponível"
  });

  // useEffect roda uma vez ao carregar o componente
  // Faz chamadas ao backend para buscar veículos, marcas e modelos
  useEffect(() => {
    axios.get("http://localhost:8081/veiculos")
      .then(r => setVeiculos(r.data))
      .catch(err => console.error("Erro ao buscar veículos:", err));

    axios.get("http://localhost:8081/marcas")
      .then(r => setMarcas(r.data))
      .catch(err => console.error("Erro ao buscar marcas:", err));

    axios.get("http://localhost:8081/modelos")
      .then(r => setModelos(r.data))
      .catch(err => console.error("Erro ao buscar modelos:", err));
  }, []);

  // Função para adicionar um novo veículo
  const adicionarVeiculo = () => {
    axios.post("http://localhost:8081/veiculos", {
      ano: form.ano,
      cor: form.cor,
      preco: form.preco,
      quilometragem: form.quilometragem,
      status: form.status,
      marca: { id: form.marcaId },   // envia apenas o ID da marca
      modelo: { id: form.modeloId }  // envia apenas o ID do modelo
    })
    .then(r => {
      // adiciona o novo veículo na lista
      setVeiculos([...veiculos, r.data]);

      // limpa o formulário após cadastro
      setForm({
        marcaId: "",
        modeloId: "",
        ano: "",
        cor: "",
        preco: "",
        quilometragem: "",
        status: "Disponível"
      });
    })
    .catch(err => alert("Erro ao cadastrar veículo: " + err.message));
  };

  // Função para marcar veículo como vendido
  const marcarVendido = (id) => {
    axios.put(`http://localhost:8081/veiculos/${id}/vendido`)
      .then(r => setVeiculos(veiculos.map(v => v.id === id ? r.data : v)))
      .catch(err => alert("Erro ao atualizar veículo: " + err.message));
  };

  return (
    <div>
      <h2>Cadastro de Veículos</h2>

      {/* Dropdown para selecionar marca */}
      <select 
        value={form.marcaId}
        onChange={e => setForm({...form, marcaId: Number(e.target.value)})}
      >
        <option value="">Selecione a marca</option>
        {marcas.map(m => <option key={m.id} value={m.id}>{m.nome}</option>)}
      </select>

      {/* Dropdown para selecionar modelo */}
      <select 
        value={form.modeloId}
        onChange={e => setForm({...form, modeloId: Number(e.target.value)})}
      >
        <option value="">Selecione o modelo</option>
        {modelos.map(m => <option key={m.id} value={m.id}>{m.nome}</option>)}
      </select>

      {/* Campos de entrada para ano, cor, preço e quilometragem */}
      <input 
        type="number" 
        placeholder="Ano" 
        value={form.ano}
        onChange={e => setForm({...form, ano: e.target.value})}
      />
      <input 
        type="text" 
        placeholder="Cor" 
        value={form.cor}
        onChange={e => setForm({...form, cor: e.target.value})}
      />
      <input 
        type="number" 
        placeholder="Preço" 
        value={form.preco}
        onChange={e => setForm({...form, preco: e.target.value})}
      />
      <input 
        type="number" 
        placeholder="Quilometragem" 
        value={form.quilometragem}
        onChange={e => setForm({...form, quilometragem: e.target.value})}
      />

      {/* Botão para adicionar veículo */}
      <button onClick={adicionarVeiculo}>Adicionar</button>

      {/* Lista de veículos cadastrados */}
      <ul>
        {veiculos.map(v => (
          <li key={v.id}>
            {/* Exibe marca e modelo conforme retorno do backend */}
            {v.marca?.nome || v.marca} - {v.modelo?.nome || v.modelo} - {v.ano} - {v.cor} - R${v.preco} - {v.status}
            
            {/* Botão só aparece se o veículo estiver disponível */}
            {v.status === "Disponível" && (
              <button onClick={() => marcarVendido(v.id)}>Marcar como Vendido</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Veiculos;

