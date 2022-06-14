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

exports.getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.getTask(id);
    res.status(200).json({ sucesso: task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.getTask();
    res.status(200).json({ sucesso: tasks });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
