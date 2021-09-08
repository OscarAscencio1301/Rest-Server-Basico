const { Schema, model } = require("mongoose");

const Usuario = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es Obligatorio'],
    },

    correo: {
        type: String,
        required: [true, 'El correo es Obligatorio'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'La contraseña es Obligatoria'],
    },

    imagen: {
        type: String,
    },

    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },

    estado: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    },

})

Usuario.methods.toJSON = function () {
    const {__v, password, ...usuario} = this.toObject();

    return usuario;
}


module.exports = model('Usuario', Usuario,)