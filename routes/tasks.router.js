const express = require('express');
const router = express.Router();
const Tasks = require('../controllers/tasks.controllers');

router.post("/task", Tasks.createTask);
router.get("/task", Tasks.getTaskByName);
router.get("/task/:id", Tasks.getTask);
router.get("/tasks", Tasks.getTasks);
router.put("/task/:id", Tasks.updateTask);
router.put("/task", Tasks.completedTask);
router.delete("/task/:id", Tasks.deleteTask);

module.exports = router;