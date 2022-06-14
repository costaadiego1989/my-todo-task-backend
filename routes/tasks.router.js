const express = require('express');
const router = express.Router();
const Tasks = require('../controllers/tasks.controllers');

router.post("/task", Tasks.createTask);
router.get("/task/:id", Tasks.getTask);
router.get("/tasks", Tasks.getTasks);
router.put("task", Tasks.updateTask);
router.delete("task", Tasks.deleteTask);

module.exports = router;