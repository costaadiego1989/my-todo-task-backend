const Task = require("../models/tasks");

exports.createTask = async (task) => {
  return await new Task(task).save();
};

exports.getTask = async (taskId) => {
  return await Task.findById(taskId);
};

exports.getTaskByName = async (taskName) => {
  return await Task.find({ name: taskName });
};

exports.getTasks = async () => {
  return await Task.find();
};

exports.updateTask = async (task) => {
  return await new Task(task).save();
};

exports.completedTask = async (task) => {
  return await new Task(task).save().sort({ name: 'desc' });
};

exports.deleteTask = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};
