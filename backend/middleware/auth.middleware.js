const jwt = require("jsonwebtoken");

// Verificar el token del cliente
const verificarToken = (req, res, next) => {
    const encabezado = req.headers.authorization;

    if (!encabezado || !encabezado.startsWith("Bearer ")) {
        return res.status(401).json({
            mensaje: "Acceso denegado. Debes iniciar sesión."
        });
    }

    const token = encabezado.split(" ")[1];

    try {
        const usuarioVerificado = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.usuario = usuarioVerificado;
        next();

    } catch (error) {
        return res.status(401).json({
            mensaje: "Token inválido o expirado."
        });
    }
};

module.exports = verificarToken;