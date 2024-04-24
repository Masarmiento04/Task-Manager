const Router = require('express');
const { getTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/task.controller');

const router = Router();

router.get('/tasks', getTasks);

router.get('/task/:id', getTaskById);

router.post('/createTask', createTask);

router.put('/task/:id', updateTask);

router.delete('/task/:id', deleteTask);

module.exports = router;