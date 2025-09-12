const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.NAME_DABASE, 'root', process.env.PASSWORD_DATABSE, {
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco feita com sucesso!");
  } catch (error) {
    console.error("Erro ao se conectar ao banco de dados:", error);
  }
})();

module.exports = sequelize;