const Task = require('../models/task.model');
const User = require('../models/user.model');
const faker = require('@faker-js/faker');

// Obtener todos las tareas
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        console.error('Error al obtener las tareas: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Crear una nueva tarea
exports.getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        console.log("Este es el parametro: " + taskId);
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not foud' });
        }
        res.json(task);
    } catch (error) {
        console.error('Error getting task by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Obtener una tarea por su ID
exports.createTask = async (req, res) => {
    try {
        const { user_id, title, description } = req.body;
        if (!user_id || !title || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newTask = await Task.create(
            {
                user_id: user_id,
                title: title,
                description: description
            }
        );
        res.status(201).json(newTask);

    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Actualizar una tarea por su ID
exports.updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { user_id, title, description } = req.body;

        if (!user_id || !title || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const findTask = await Task.findByPk(taskId);
        if (!findTask) {
            return res.status(404).json({ message: 'Task not foud' });
        }

        const amount = await User.count();

        const updatedRows = await Task.update(
            {
                user_id: user_id,
                title: title,
                description: description
            },
            {
                where: {
                    task_id: taskId
                }
            }
        );

        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({ message: 'Task updated' })

    } catch (error) {
        console.error('Error updating task: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Eliminar una tarea por su ID
exports.deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not foud' });
        }
        await task.destroy({ where: { task_id: taskId } });
        res.json({ message: 'Successfully deleted task' })
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}