const Task = require("../models/tasks");

exports.createTask = async (task) => {
  return await new Task(task).save();
};

exports.getTask = async (taskId) => {
  return await Task.findById(taskId);
};

exports.getTask = async () => {
  return await Task.find();
};

exports.updateTask = async (task) => {
  return await new Task(task).save();
};

exports.deleteTask = async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
  };
