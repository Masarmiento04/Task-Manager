const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { faker, fa } = require('@faker-js/faker');

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error al obtener usuarios: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        if (!password || !username || !email) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create(
            {
                // username: faker.person.fullName,
                // password: hashedPassword,
                // email: faker.internet.email
                username: username,
                password: hashedPassword,
                email: email
            }
        );
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Obtener un usuario por su ID
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not foud' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error getting user by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Actualizar un usuario por su ID
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { username, password, email, estado } = req.body;
    
    try {
        const findUser = await User.findByPk(userId)
        if (!findUser) {
            return res.status(404).json({ message: 'User not foud' });
        }

        const hashedPassword = await bcrypt.hash(rPassword, 10);
        const updatedRows = await User.update(
            {
                username: faker.person.fullName(),
                password: hashedPassword,
                email: faker.person.email(),
                estado: true
            },
            {
                where: {
                    user_id: userId
                }
            }
        );

        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User updated' })

    } catch (error) {
        console.error('Error updating user: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Eliminar un usuario por su ID
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not foud' });
        }
        await user.destroy({ where: { user_id: userId } });
        res.json({ message: 'Successfully deleted user' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}