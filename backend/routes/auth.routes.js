const express = require("express");
const router = express.Router();

const {
    registrarUsuario,
    iniciarSesion
} = require("../controllers/auth.controller");

const User = require("../models/User");
const verificarToken = require("../middleware/auth.middleware");

// REGISTRO
router.post("/register", registrarUsuario);

// INICIO DE SESIÓN
router.post("/login", iniciarSesion);

// CONSULTAR PERFIL COMPLETO
router.get("/perfil", verificarToken, async (req, res) => {

    try {

        const usuario = await User.findById(req.usuario.id)
            .select("nombre correo telefono tipoCliente");

        if (!usuario) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado."
            });
        }

        res.status(200).json({
            mensaje: "Perfil consultado correctamente.",
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                telefono: usuario.telefono,
                tipoCliente: usuario.tipoCliente
            }
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al consultar el perfil."
        });

    }

});

module.exports = router;