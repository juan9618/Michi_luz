const express = require("express");
const router = express.Router();

const { registrarUsuario } = require("../controllers/auth.controller");

// Ruta para registrar clientes
router.post("/register", registrarUsuario);

module.exports = router;