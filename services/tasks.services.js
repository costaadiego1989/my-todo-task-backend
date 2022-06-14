const Task = require("../models/tasks");

exports.createTask = async (task) => {
  return await new Task(task).save();
};

exports.getTask = async (taskId) => {
  return await Task.findById(taskId);
};

