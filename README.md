# 📌 Gerenciador de Tarefas

Sistema de gerenciamento de tarefas desenvolvido em **Node.js** com integração a **banco de dados relacional**.  
O objetivo é oferecer um CRUD completo para organização de atividades, permitindo criar, editar, listar e concluir tarefas.

## 🚀 Funcionalidades
- Cadastro de tarefas
- Listagem de pendentes e concluídas
- Edição de tarefas
- Conclusão de tarefas
- Persistência de dados no banco de dados

## 🛠️ Tecnologias
- Node.js + Express
- Sequelize (ORM)
- Banco de dados MySQL/PostgreSQL/SQLite
- Handlebars (para renderização de views)

## ⚙️ Como executar
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/projeto-tarefas.git

# Acesse a pasta
cd projeto-tarefas

# Instale as dependências
npm install

# Configure o arquivo .env com os dados do banco
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=gerenciador_tarefas

# Execute as migrations
npx sequelize db:migrate

# Inicie o servidor
npm start
