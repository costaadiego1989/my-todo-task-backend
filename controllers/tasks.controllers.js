const Task = require("../services/tasks.services");

exports.createTask = async (req, res) => {
  try {
    const taskData = {
      name: req.body.taskName,
      date: req.body.taskDate,
    };
    await Task.createTask(taskData);
    res.status(200).json({ sucesso: "Tarefa criada com sucesso." });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

