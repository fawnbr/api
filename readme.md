## API
## API RESTFul desenvolvida em JavaScript

### 🛠 Tecnologias utilizadas
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org)

### Features
- Arquitetura MVC;
- Controle de alunos via Users;
- Controle de acesso via token;
- Estudantes com recurso de upload de fotos;
- Senhas com hash para o Banco de Dados;

### Usage
A API utiliza o MySQL como banco de dados e o Sequelize como ORM.

Para usar a aplicação, copie o arquivo ```.env-example``` e renomeie para ```.env```.

Preencha os campos com nome da base de dados, endereço da conexão, porta da conexão, usuário da conexão, senha da conexão, chave secreta para geração de tokens e período de expiração dos tokens gerados, respectivamente.

Para instalação dos pacotes digite ```yarn``` ou ```npm install```

Pronto, a aplicação deve estar rodando em ```http://localhost:3001```
