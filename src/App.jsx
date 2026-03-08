import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Veiculos from "./components/Veiculos";
import Marcas from "./components/Marcas";
import Modelos from "./components/Modelos";

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Rota de login */}
        <Route path="/" element={<Login onLogin={setUsuario} />} />

        {/* Rota home protegida */}
        <Route
          path="/home"
          element={
            usuario ? <Home usuario={usuario} /> : <Login onLogin={setUsuario} />
          }
        />

        {/* Rotas de administração (somente ADMIN) */}
        <Route
          path="/veiculos"
          element={
            usuario?.perfil === "ADMIN" ? (
              <Veiculos />
            ) : (
              <Home usuario={usuario} />
            )
          }
        />
        <Route
          path="/marcas"
          element={
            usuario?.perfil === "ADMIN" ? (
              <Marcas />
            ) : (
              <Home usuario={usuario} />
            )
          }
        />
        <Route
          path="/modelos"
          element={
            usuario?.perfil === "ADMIN" ? (
              <Modelos />
            ) : (
              <Home usuario={usuario} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

