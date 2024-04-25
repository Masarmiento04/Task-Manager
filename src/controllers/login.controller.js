const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.getSesion = async (req, res) => {
    try {
        // Tomar el correo y la contraseña del cuerpo de la solicitud
        const { email, password } = req.body;

        // Buscar el usuario en la base de datos basado en el correo proporcionado
        const user = await User.findOne(
            {
                where: {
                    email: email,
                }
            }
        );

        // Verificar si se encontró un usuario con el correo proporcionado
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials or unregistered user' });
        }

        // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Wrong password' });
        }
        // Las credenciales son válidas, el usuario puede iniciar sesión
        res.json({ message: 'Successful login' })

    } catch (error) {
        console.error('Failed to login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}