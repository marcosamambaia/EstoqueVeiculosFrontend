import React, { useState, useEffect } from "react";
import axios from "axios";

function Modelos() {
  const [modelos, setModelos] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [form, setForm] = useState({ nome: "", tipo: "", marcaId: "" });

  useEffect(() => {
    axios.get("http://localhost:8081/modelos").then(r => setModelos(r.data));
    axios.get("http://localhost:8081/marcas").then(r => setMarcas(r.data));
  }, []);

  const adicionarModelo = () => {
    axios.post("http://localhost:8081/modelos", {
      nome: form.nome,
      tipo: form.tipo,
      marca: { id: form.marcaId } // agora é número
    }).then(r => setModelos([...modelos, r.data]));
    setForm({ nome: "", tipo: "", marcaId: "" });
  };

  return (
    <div>
      <h2>Cadastro de Modelos</h2>
      <input 
        value={form.nome} 
        onChange={e => setForm({...form, nome: e.target.value})} 
        placeholder="Nome do modelo" 
      />
      <input 
        value={form.tipo} 
        onChange={e => setForm({...form, tipo: e.target.value})} 
        placeholder="Tipo (carro, moto...)" 
      />
      <select 
        value={form.marcaId} 
        onChange={e => setForm({...form, marcaId: Number(e.target.value)})} // conversão para número
      >
        <option value="">Selecione a marca</option>
        {marcas.map(m => <option key={m.id} value={m.id}>{m.nome}</option>)}
      </select>
      <button onClick={adicionarModelo}>Adicionar</button>

      <ul>
        {modelos.map(m => (
          <li key={m.id}>
            {m.nome} - {m.tipo} ({m.marca?.nome}) {/* agora mostra a marca */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Modelos;

