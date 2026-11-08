
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Configuración del servidor
app.use(cors());
app.use(express.json());

// Rutas de la aplicación
app.use("/api/users", authRoutes);

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor de MICHI LUZ funcionando");
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar servidor y conectar base de datos
const iniciarServidor = async () => {
    await conectarDB();

    app.listen(PORT, () => {
        console.log(`Servidor MICHI LUZ escuchando en el puerto ${PORT}`);
    });
};

iniciarServidor();