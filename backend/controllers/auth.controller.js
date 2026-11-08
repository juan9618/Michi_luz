const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registrar un nuevo cliente
const registrarUsuario = async (req, res) => {
    try {
        const { nombre, correo, contrasena, telefono } = req.body;

        if (!nombre || !correo || !contrasena) {
            return res.status(400).json({
                mensaje: "Nombre, correo y contraseña son obligatorios"
            });
        }

        const usuarioExiste = await User.findOne({ correo });

        if (usuarioExiste) {
            return res.status(409).json({
                mensaje: "Este correo ya está registrado"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const contrasenaEncriptada = await bcrypt.hash(contrasena, salt);

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

// Iniciar sesión de un cliente
const iniciarSesion = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;

        if (!correo || !contrasena) {
            return res.status(400).json({
                mensaje: "Correo y contraseña son obligatorios"
            });
        }

        const usuario = await User.findOne({ correo });

        if (!usuario) {
            return res.status(401).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        const contrasenaValida = await bcrypt.compare(
            contrasena,
            usuario.contrasena
        );

        if (!contrasenaValida) {
            return res.status(401).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        const token = jwt.sign(
            {
                id: usuario._id,
                correo: usuario.correo
            },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.status(200).json({
            mensaje: "Inicio de sesión correcto",
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                tipoCliente: usuario.tipoCliente
            }
        });

    } catch (error) {
        console.error("Error al iniciar sesión:", error.message);

        res.status(500).json({
            mensaje: "Error al iniciar sesión"
        });
    }
};

module.exports = {
    registrarUsuario,
    iniciarSesion
};