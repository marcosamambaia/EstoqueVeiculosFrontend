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

### Para quem ainda não tem React/Vite instalado
1. Instale o Node.js (versão LTS recomendada).
2. Instale o Vite globalmente (opcional):
   npm install -g vite
3. Clone o repositório:
   git clone https://github.com/marcosamambaia/EstoqueVeiculosFrontend.git
   cd EstoqueVeiculosFrontend
4. Instale as dependências:
   npm install
5. Inicie o servidor de desenvolvimento:
   npm run dev
6. A interface estará disponível em:
   http://localhost:5173
7. Certifique-se de que o backend esteja rodando em:
   http://localhost:8081

### Para quem já tem tudo instalado
Basta entrar na pasta do projeto e rodar:
   cd EstoqueVeiculosFrontend
   npm run dev

Estrutura do projeto
--------------------
src/
 ├── components/   -> Componentes reutilizáveis (Login, Marcas, Modelos, Veículos)
 ├── pages/        -> Páginas principais da aplicação
 ├── services/     -> Configuração de chamadas à API (Axios)
 ├── App.jsx       -> Componente raiz com rotas e controle de perfil
 └── main.jsx      -> Ponto de entrada da aplicação

Integração com Backend
----------------------
O frontend consome os endpoints do backend:
- POST /usuarios/login -> autenticação e retorno do perfil (ADMIN ou VENDEDOR)
- POST /usuarios/cadastro -> cadastro de usuário
- GET /veiculos -> lista veículos
- POST /veiculos -> cadastra veículo
- PUT /veiculos/{id}/vendido -> marca como vendido
- DELETE /veiculos/{id} -> remove veículo
- GET /marcas -> lista marcas
- POST /marcas -> cadastra marca
- DELETE /marcas/{id} -> remove marca
- GET /modelos -> lista modelos
- POST /modelos -> cadastra modelo

Funcionalidades implementadas
-----------------------------
- Tela de Login integrada ao backend.
- Controle de acesso por perfil:
  - ADMIN → pode acessar Marcas, Modelos e Veículos.
  - VENDEDOR → pode acessar apenas Veículos.
- Navegação com React Router.
- Botão de Logout para encerrar sessão.
- CRUD completo de Marcas, Modelos e Veículos.
- Marcar veículo como Vendido.

Autor
-----
Marco Samambaia
Projeto acadêmico desenvolvido em React (Vite) integrado com Spring Boot.

