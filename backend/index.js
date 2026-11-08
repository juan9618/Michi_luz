const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor de MICHI LUZ funcionando");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor MICHI LUZ escuchando en el puerto ${PORT}`);
});