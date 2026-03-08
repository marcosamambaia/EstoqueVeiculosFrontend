import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // para redirecionar

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8081/usuarios/login", {
        email,
        senha
      });

      // Backend retorna mensagem, perfil, email e nome
      const { mensagem, perfil, nome, email: userEmail } = response.data;

      // Exibe mensagem de sucesso
      setMensagem(`${mensagem} | Perfil: ${perfil} | Usuário: ${nome}`);

      // Salva usuário no localStorage (opcional)
      localStorage.setItem("usuario", JSON.stringify({ perfil, nome, email: userEmail }));

      // Chama função passada pelo App para salvar globalmente
      if (onLogin) {
        onLogin({ perfil, nome, email: userEmail });
      }

      // Redireciona para a tela principal
      navigate("/home");
    } catch (error) {
      setMensagem("Erro no login. Verifique email e senha.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Login;

