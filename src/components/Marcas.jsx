import React, { useState, useEffect } from "react";
import axios from "axios";

function Marcas() {
  const [marcas, setMarcas] = useState([]);
  const [nome, setNome] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/marcas")
      .then(response => setMarcas(response.data))
      .catch(error => console.error("Erro ao buscar marcas:", error));
  }, []);

  const adicionarMarca = () => {
    axios.post("http://localhost:8081/marcas", { nome })
      .then(response => {
        setMarcas([...marcas, response.data]);
        setNome("");
      })
      .catch(error => console.error("Erro ao adicionar marca:", error));
  };

  const removerMarca = (id) => {
    axios.delete(`http://localhost:8081/marcas/${id}`)
      .then(() => setMarcas(marcas.filter(m => m.id !== id)))
      .catch(error => console.error("Erro ao remover marca:", error));
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
