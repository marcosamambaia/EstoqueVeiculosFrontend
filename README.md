
Estoque de Veículos - Backend
=============================

Aplicação Spring Boot para gerenciamento de veículos.
Permite cadastrar, listar, atualizar status e excluir veículos.
Este projeto faz parte do sistema de controle de estoque de veículos.

IMPORTANTE
----------
Este backend depende do frontend em React para funcionar corretamente.
Os dois projetos estarão disponíveis nos meus repositórios GitHub:
- EstoqueVeiculosBackend
- EstoqueVeiculosFrontend

O backend fornece a API REST e o frontend consome essa API para exibir e manipular os dados.

Tecnologias utilizadas
----------------------
- Java 17+
- Spring Boot
- Spring Data JPA
- Maven
- Banco de dados (H2/MySQL/PostgreSQL - ajuste conforme sua configuração)

Como rodar o projeto
--------------------
1. Clone o repositório:
   git clone https://github.com/marcosamambaia/EstoqueVeiculosBackend.git
   cd EstoqueVeiculosBackend

2. Compile e rode com Maven:
   mvn spring-boot:run

3. A API estará disponível em:
   http://localhost:8081

4. Para que o sistema funcione corretamente, é necessário também rodar o frontend React
   que estará disponível no repositório EstoqueVeiculosFrontend.
   O frontend se conecta ao backend na porta 8081.

Endpoints principais
--------------------
Veículos:
- GET /veiculos -> lista todos os veículos
- POST /veiculos -> cadastra um novo veículo
- GET /veiculos/{id} -> busca veículo por ID
- PUT /veiculos/{id}/vendido -> marca veículo como vendido
- DELETE /veiculos/{id} -> remove veículo

Marcas:
- GET /marcas -> lista todas as marcas

Modelos:
- GET /modelos -> lista todos os modelos

Estrutura do projeto
--------------------
```
src/main/java/com/unifecaf/estoqueveiculos/
 ├── controller/   -> Controllers REST
 ├── dto/          -> Data Transfer Objects (DTOs)
 ├── model/        -> Entidades JPA
 └── repository/   -> Interfaces de acesso ao banco
```
Autor
-----
Marco Samambaia
Projeto acadêmico desenvolvido em Java com Spring Boot.
