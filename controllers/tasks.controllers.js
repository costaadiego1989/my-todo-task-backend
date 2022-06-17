const Task = require("../services/tasks.services");

exports.createTask = async (req, res) => {
  try {
    const taskData = {
      name: req.body.taskName,
      date: req.body.taskDate,
    };
    await Task.createTask(taskData);
    res.status(201).json({ sucesso: "Tarefa criada com sucesso." });
  } catch (error) {
    res.status(400).json({ error: error });
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

exports.getTaskByName = async (req, res) => {
    try {
      const name = req.params.name;
      console.log(name);
      const task = await Task.getTaskByName(name);
      res.status(200).json({ sucesso: task });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    res.status(200).json({ sucesso: tasks });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskData = {
      name: req.body.taskName,
      date: req.body.taskDate,
    };
    const task = await Task.getTask(id);
    Object.assign(task, taskData);
    await Task.updateTask(task);
    res
      .status(200)
      .json({ sucesso: "Tarefa atualizada com sucesso.", tarefa: task });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.completedTask = async (req, res) => {
    try {
      const { id } = req.body;
      const bol = false;
      const taskData = {
        completed: !bol,
      };
      const task = await Task.getTask(id);
      Object.assign(task, taskData);
      await Task.completedTask(task);
      res
        .status(200)
        .json({ sucesso: "Tarefa completada com sucesso.", tarefa: task });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.getTask(id);
    const task = await Task.deleteTask(id);
    res
      .status(200)
      .json({ sucesso: "Tarefa deletada com sucesso.", tarefa: task });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
