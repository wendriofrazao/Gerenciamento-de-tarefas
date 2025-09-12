const express = require('express');
const exphbs = require('express-handlebars');
const routers = require('./routers/tasksRouters.js');
const sequelize = require('./database/db.js');
const path = require('path');
// const { engine } = require("express-handlebars");
// const Task = require('./models/task.js');

const app = express();

const hbs = exphbs.create({
  helpers: {
    eq: (a) => a === a
  }
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routers);

const port = 3000;
sequelize
  .sync() // ou .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando com sucesso! http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(`Erro ao ligar o servidor: ${error}`);
  });