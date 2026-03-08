import React from "react";
import { Link } from "react-router-dom";

function Home({ usuario }) {
  return (
    <div>
      {/* Cabeçalho de boas-vindas */}
      <h2>Bem-vindo, {usuario?.nome}</h2>
      <p>Perfil: {usuario?.perfil}</p>

      {/* Menu de navegação visível apenas para ADMIN */}
      {usuario?.perfil === "ADMIN" && (
        <nav>
          {/* Links para as rotas de administração */}
          <Link to="/veiculos">Veículos</Link> |{" "}
          <Link to="/marcas">Marcas</Link> |{" "}
          <Link to="/modelos">Modelos</Link>
        </nav>
      )}

      {/* Botão de logout */}
      <button
        onClick={() => {
          // Remove usuário do localStorage (se estiver salvo)
          localStorage.removeItem("usuario");

          // Redireciona para a tela de login
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;

