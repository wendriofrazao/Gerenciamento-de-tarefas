const express = require('express');
const routers = express.Router();
const Tasks = require('../controllers/taskController.js');

routers.get("/", Tasks.home);

routers.get("/task/create", (req, res) => {res.render("tasks/createTask")});
routers.post("/task/create", Tasks.inseriTask);
routers.get('/task/showTasks', Tasks.showTasks);
routers.get('/task/editationTask/:id', Tasks.editationTask);
routers.post('/task/updatedTask', Tasks.updatedTask);
routers.get('/task/deleteTask/:id', Tasks.deleteTask);
routers.get('/task/pendingTasks', Tasks.pendingTasks);
routers.get('/task/completedTasks', Tasks.completedTasks);

module.exports = routers;