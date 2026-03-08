import React, { useState, useEffect } from "react";
import axios from "axios";

function Modelos() {
  const [modelos, setModelos] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [form, setForm] = useState({ nome: "", tipo: "", marcaId: "" });

  // Busca inicial de modelos e marcas
  useEffect(() => {
    axios.get("http://localhost:8081/modelos")
      .then(r => setModelos(r.data))
      .catch(err => console.error("Erro ao buscar modelos:", err));

    axios.get("http://localhost:8081/marcas")
      .then(r => setMarcas(r.data))
      .catch(err => console.error("Erro ao buscar marcas:", err));
  }, []);

  // Adicionar novo modelo
  const adicionarModelo = () => {
    if (!form.nome.trim() || !form.tipo.trim() || !form.marcaId) {
      alert("Preencha todos os campos!");
      return;
    }

    axios.post("http://localhost:8081/modelos", {
      nome: form.nome,
      tipo: form.tipo,
      marca: { id: form.marcaId } // envia apenas ID da marca
    })
    .then(r => {
      setModelos([...modelos, r.data]); // adiciona na lista
      setForm({ nome: "", tipo: "", marcaId: "" }); // limpa formulário
    })
    .catch(err => alert("Erro ao adicionar modelo: " + err.message));
  };

  return (
    <div>
      <h2>Cadastro de Modelos</h2>

      {/* Campo nome */}
      <input 
        value={form.nome} 
        onChange={e => setForm({...form, nome: e.target.value})} 
        placeholder="Nome do modelo" 
      />

      {/* Campo tipo */}
      <input 
        value={form.tipo} 
        onChange={e => setForm({...form, tipo: e.target.value})} 
        placeholder="Tipo (carro, moto...)" 
      />

      {/* Dropdown de marcas */}
      <select 
        value={form.marcaId} 
        onChange={e => setForm({...form, marcaId: Number(e.target.value)})}
      >
        <option value="">Selecione a marca</option>
        {marcas.map(m => <option key={m.id} value={m.id}>{m.nome}</option>)}
      </select>

      <button onClick={adicionarModelo}>Adicionar</button>

      {/* Lista de modelos */}
      <ul>
        {modelos.map(m => (
          <li key={m.id}>
            {m.nome} - {m.tipo} ({m.marca?.nome || "Sem marca"})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Modelos;

