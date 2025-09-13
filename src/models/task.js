const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.js');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.ENUM('baixa', 'média', 'alta'),
    defaultValue: 'média',
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tags: {
    type: DataTypes.JSON, 
    allowNull: true,
  },
  progress: {
    type: DataTypes.INTEGER,
    defaultValue: 0, // de 0 a 100
    validate: {
      min: 0,
      max: 100,
    }
  },  
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, 
  }
 }, {   
    timestamps: true, 
})

module.exports = Task;