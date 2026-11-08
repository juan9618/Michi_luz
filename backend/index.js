const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor de MICHI LUZ funcionando");
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Conectar la base de datos e iniciar el servidor
const iniciarServidor = async () => {
    await conectarDB();

    app.listen(PORT, () => {
        console.log(`Servidor MICHI LUZ escuchando en el puerto ${PORT}`);
    });
};

iniciarServidor();