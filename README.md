
Estoque de Veículos - Frontend
==============================

Aplicação desenvolvida em React utilizando Vite como bundler.
Este projeto consome a API REST fornecida pelo backend (EstoqueVeiculosBackend).

IMPORTANTE
----------
Este frontend depende do backend em Spring Boot para funcionar corretamente.
Os dois projetos estarão disponíveis nos meus repositórios GitHub:
- EstoqueVeiculosBackend
- EstoqueVeiculosFrontend

O frontend se conecta ao backend na porta 8081.

Tecnologias utilizadas
----------------------
- React
- Vite
- JavaScript (ES6+)
- Axios (para chamadas HTTP)
- HTML5 / CSS3

Como rodar o projeto
--------------------
1. Clone o repositório:
   git clone https://github.com/marcosamambaia/EstoqueVeiculosFrontend.git
   cd EstoqueVeiculosFrontend

2. Instale as dependências:
   npm install

3. Inicie o servidor de desenvolvimento:
   npm run dev

4. A interface estará disponível em:
   http://localhost:5173

5. Certifique-se de que o backend esteja rodando em:
   http://localhost:8081

Estrutura do projeto
--------------------
```
src/
 ├── components/   -> Componentes reutilizáveis
 ├── pages/        -> Páginas principais da aplicação
 ├── services/     -> Configuração de chamadas à API (Axios)
 ├── App.jsx       -> Componente raiz
 └── main.jsx      -> Ponto de entrada da aplicação
```
Integração com Backend
----------------------
- O frontend consome os endpoints do backend:
  - GET /veiculos -> lista veículos
  - POST /veiculos -> cadastra veículo
  - PUT /veiculos/{id}/vendido -> marca como vendido
  - DELETE /veiculos/{id} -> remove veículo

Autor
-----
Marco Samambaia
Projeto acadêmico desenvolvido em React (Vite) integrado com Spring Boot.
