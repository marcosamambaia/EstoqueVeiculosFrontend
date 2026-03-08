import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {
  // Estados para armazenar email e senha digitados
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Função chamada ao clicar no botão "Login"
  const handleLogin = async () => {
    try {
      // Faz requisição POST para o backend
      const response = await axios.post("http://localhost:8081/usuarios/login", {
        email,
        senha
      });

      // O backend retorna mensagem e perfil
      const perfil = response.data.perfil;

      // Exibe mensagem de sucesso
      setMensagem(`Login realizado com sucesso! Perfil: ${perfil}`);

      // Chama função passada pelo App para salvar perfil globalmente
      if (onLogin) {
        onLogin(perfil);
      }
    } catch (error) {
      // Se der erro (usuário não encontrado ou senha incorreta)
      setMensagem("Erro no login. Verifique email e senha.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Campo de email */}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Campo de senha */}
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {/* Botão de login */}
      <button onClick={handleLogin}>Entrar</button>

      {/* Mensagem de feedback */}
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Login;

