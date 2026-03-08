import React, { useState, useEffect } from "react";
import axios from "axios";

function Marcas() {
  const [marcas, setMarcas] = useState([]);
  const [nome, setNome] = useState("");

  // Busca inicial de marcas
  useEffect(() => {
    axios.get("http://localhost:8081/marcas")
      .then(response => setMarcas(response.data))
      .catch(error => console.error("Erro ao buscar marcas:", error));
  }, []);

  // Adicionar nova marca
  const adicionarMarca = () => {
    if (!nome.trim()) {
      alert("Informe o nome da marca!");
      return;
    }

    axios.post("http://localhost:8081/marcas", { nome })
      .then(response => {
        setMarcas([...marcas, response.data]); // adiciona na lista
        setNome(""); // limpa campo
      })
      .catch(error => alert("Erro ao adicionar marca: " + error.message));
  };

  // Remover marca
  const removerMarca = (id) => {
    axios.delete(`http://localhost:8081/marcas/${id}`)
      .then(() => setMarcas(marcas.filter(m => m.id !== id)))
      .catch(error => alert("Erro ao remover marca: " + error.message));
  };

  return (
    <div>
      <h2>Cadastro de Marcas</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome da marca"
      />
      <button onClick={adicionarMarca}>Adicionar</button>

      <ul>
        {marcas.map(marca => (
          <li key={marca.id}>
            {marca.nome}
            <button onClick={() => removerMarca(marca.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Marcas;

