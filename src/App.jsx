import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Marcas from "./components/Marcas";
import Modelos from "./components/Modelos";
import Veiculos from "./components/Veiculos";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/marcas">Marcas</Link> | 
        <Link to="/modelos">Modelos</Link> | 
        <Link to="/veiculos">Veículos</Link>
      </nav>
      <Routes>
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/veiculos" element={<Veiculos />} />
      </Routes>
    </Router>
  );
}

export default App;

