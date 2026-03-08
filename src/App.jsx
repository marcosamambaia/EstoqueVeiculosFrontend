import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Marcas from "./components/Marcas";
import Modelos from "./components/Modelos";
import Veiculos from "./components/Veiculos";

function App() {
  const [perfil, setPerfil] = useState(null); // guarda o perfil do usuário logado

  return (
    <Router>
      {!perfil ? (
        // Se não houver perfil, mostra a tela de login
        <Login onLogin={setPerfil} />
      ) : (
        <div>
          {/* Menu de navegação */}
          <nav>
            {perfil === "ADMIN" && <Link to="/marcas">Marcas</Link>} | 
            {perfil === "ADMIN" && <Link to="/modelos">Modelos</Link>} | 
            <Link to="/veiculos">Veículos</Link> | 
            
            {/* Botão de logout */}
            <button onClick={() => setPerfil(null)}>Logout</button>
          </nav>

          {/* Rotas disponíveis conforme perfil */}
          <Routes>
            {perfil === "ADMIN" && <Route path="/marcas" element={<Marcas />} />}
            {perfil === "ADMIN" && <Route path="/modelos" element={<Modelos />} />}
            <Route path="/veiculos" element={<Veiculos />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;

