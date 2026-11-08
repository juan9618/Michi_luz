const User = require("../models/User");
const bcrypt = require("bcryptjs");
// Registrar un nuevo cliente
const registrarUsuario = async (req, res) => {
    try {
        const { nombre, correo, contrasena, telefono } = req.body;

        // Verificar que los campos obligatorios estén completos
        if (!nombre || !correo || !contrasena) {
            return res.status(400).json({
                mensaje: "Nombre, correo y contraseña son obligatorios"
            });
        }

        // Verificar si el correo ya está registrado
        const usuarioExiste = await User.findOne({ correo });

        if (usuarioExiste) {
            return res.status(409).json({
                mensaje: "Este correo ya está registrado"
            });
        }

        // Proteger la contraseña
        const salt = await bcrypt.genSalt(10);
        const contrasenaEncriptada = await bcrypt.hash(contrasena, salt);

        // Crear el nuevo cliente
        const nuevoUsuario = new User({
            nombre,
            correo,
            contrasena: contrasenaEncriptada,
            telefono
        });

        await nuevoUsuario.save();

        res.status(201).json({
            mensaje: "Cliente registrado correctamente",
            usuario: {
                id: nuevoUsuario._id,
                nombre: nuevoUsuario.nombre,
                correo: nuevoUsuario.correo,
                telefono: nuevoUsuario.telefono,
                tipoCliente: nuevoUsuario.tipoCliente
            }
        });

    } catch (error) {
        console.error("Error al registrar cliente:", error.message);

        res.status(500).json({
            mensaje: "Error al registrar el cliente"
        });
    }
};

module.exports = {
    registrarUsuario
};