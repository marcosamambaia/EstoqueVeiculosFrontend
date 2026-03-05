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
    axios.get("http://localhost:8081/veiculos").then(r => setVeiculos(r.data));
    axios.get("http://localhost:8081/marcas").then(r => setMarcas(r.data));
    axios.get("http://localhost:8081/modelos").then(r => setModelos(r.data));
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
    }).then(r => setVeiculos([...veiculos, r.data])); // adiciona o novo veículo na lista
  };

  // Função para marcar veículo como vendido
  const marcarVendido = (id) => {
    axios.put(`http://localhost:8081/veiculos/${id}/vendido`)
      .then(r => setVeiculos(veiculos.map(v => v.id === id ? r.data : v)));
  };

  return (
    <div>
      <h2>Cadastro de Veículos</h2>

      {/* Dropdown para selecionar marca */}
      <select onChange={e => setForm({...form, marcaId: Number(e.target.value)})}>
        <option value="">Selecione a marca</option>
        {marcas.map(m => <option key={m.id} value={m.id}>{m.nome}</option>)}
      </select>

      {/* Dropdown para selecionar modelo */}
      <select onChange={e => setForm({...form, modeloId: Number(e.target.value)})}>
        <option value="">Selecione o modelo</option>
        {modelos.map(m => <option key={m.id} value={m.id}>{m.nome}</option>)}
      </select>

      {/* Campos de entrada para ano, cor, preço e quilometragem */}
      <input type="number" placeholder="Ano" onChange={e => setForm({...form, ano: e.target.value})}/>
      <input type="text" placeholder="Cor" onChange={e => setForm({...form, cor: e.target.value})}/>
      <input type="number" placeholder="Preço" onChange={e => setForm({...form, preco: e.target.value})}/>
      <input type="number" placeholder="Quilometragem" onChange={e => setForm({...form, quilometragem: e.target.value})}/>

      {/* Botão para adicionar veículo */}
      <button onClick={adicionarVeiculo}>Adicionar</button>

      {/* Lista de veículos cadastrados */}
      <ul>
        {veiculos.map(v => (
          <li key={v.id}>
            {/* Agora usamos v.marca e v.modelo direto, pois o DTO já retorna como string */}
            {v.marca} - {v.modelo} - {v.ano} - {v.cor} - R${v.preco} - {v.status}
            
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

