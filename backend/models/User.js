const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },

    correo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    contrasena: {
        type: String,
        required: true
    },

    telefono: {
        type: String,
        trim: true
    },

    tipoCliente: {
        type: String,
        enum: ["nuevo", "frecuente"],
        default: "nuevo"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);