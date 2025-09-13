const Task = require('../models/task.js');

class Tasks {

  // page main
  static home = (req, res) => {
          res.render('home');
   }  

   static inseriTask = async (req, res) => {
     const { title, description, priority, category, tags, progress, done } = req.body;

      if (!title || !description){
         return res.render("error/erro", { message: "Preencha os campos obrigatórios!" });
      }

        try {
          const task = await Task.create({
           title,
           description,
           priority,
           category,
           tags,
           progress,
           done: done ? true : false, 
           });

           console.log("✅ Tarefa criada com sucesso!", task.toJSON());

           res.redirect("/task/showTasks");

          } catch (error) {

            console.error("❌ Erro ao criar tarefa:", error);

            res.render("error/erro", { message: "Erro ao salvar a tarefa!" });
        }
  };


  //show task
  static showTasks = async (req, res) => {
        
      const user = await Task.findAll({ raw: true });

      if (!user) {
        return console.log("Tarefa não encontrado");
      }

      res.render('tasks/showTasks', {user});

  }



  static editationTask = async (req, res) => {

    try {
        const id = req.params.id; 

        const task = await Task.findOne({ where: { id: id }, raw: true });

          if (!task) {

            console.log("Tarefa não encontrada");

            return res.status(404).send("Tarefa não encontrada");
           }

           res.render('tasks/editationTask', { task });

    } catch (error) {

      console.error("Erro ao buscar a tarefa:", error);

      res.status(500).send("Erro no servidor");

    }

  }

  static updatedTask = async (req, res) => {
  try {
    const { id, title, description, priority, category, tags, progress, done } = req.body;

    const task = await Task.findOne({ where: { id } });
    if (!task) return res.status(404).send("Tarefa não encontrada");

    await task.update({
      title,
      description,
      priority,
      category,
      tags,
      progress,
      done: done === "true" 
    });

    console.log("✅ Tarefa atualizada com sucesso!");
    res.redirect("/task/showTasks");
  } catch (error) {
    console.error(error);
    res.status(500).send("❌ Erro ao atualizar a tarefa");
  }
};


   // delete task
   static deleteTask = async (req, res) => {

      const id = req.params.id;

      try {

        await Task.destroy({
            where: { id: id }
        });

        res.redirect('/task/showTasks');
      } catch (error) {
        console.error("Erro ao deletar tarefa:", error);
        res.status(500).send("Erro ao deletar tarefa");
    }

   }


   // tasks pendentes

   static pendingTasks = async (req, res) => {

        const pending = await Task.findAll({
          where: { done: false },
          raw: true
        });

        if (pending.length === 0) {
          return res.status(404).send("Nenhuma tarefa pendente encontrada");
        }

        res.render('tasks/pendingTasks', { pending });

   }  

   // tasks consluidas

   static completedTasks = async (req, res) => {

      const completed = await Task.findAll({
          where: { done: true },
          raw: true
      });

        if (completed.length === 0) {
          return res.status(404).send("Nenhuma tarefa concluída encontrada");
        }

        res.render('tasks/completedTasks', { completed })

   }
}


module.exports = Tasks;