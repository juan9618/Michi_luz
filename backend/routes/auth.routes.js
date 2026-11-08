const express = require("express");
const router = express.Router();

const {
    registrarUsuario,
    iniciarSesion
} = require("../controllers/auth.controller");

const verificarToken = require("../middleware/auth.middleware");

// Registrar clientes
router.post("/register", registrarUsuario);

// Iniciar sesión
router.post("/login", iniciarSesion);

// Consultar perfil del cliente autenticado
router.get("/perfil", verificarToken, (req, res) => {
    res.status(200).json({
        mensaje: "Acceso autorizado",
        usuario: {
            id: req.usuario.id,
            correo: req.usuario.correo
        }
    });
});

module.exports = router;