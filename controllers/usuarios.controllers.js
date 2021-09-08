const { response, request } = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')

const usuariosGet = async (req = request, resp = response) => {

    const { limite = 3, desde = 0 } = req.query;

    const [data, usuarios] = await Promise.all([Usuario.find({ estado: true }).limit(Number(limite)).skip(Number(desde)), Usuario.countDocuments({ estado: true })])

    resp.status(200).json({
        ok: true,
        mensaje: 'GET del Controlador',
        data,
        usuarios,
    })

}

const usuariosDelete = async(req, resp) => {
    const id = req.params.id

    // const usuario = await Usuario.findByIdAndDelete(id)
    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false})

    resp.status(201).json({
        ok: true,
        mensaje: 'DELETE',
        id,
        usuario
    })
}

const usuariosPost = async (req, resp) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    await usuario.save();

    resp.status(201).json({
        ok: true,
        mensaje: 'POST',
        usuario
    })
}



const usuariosPut = async (req, resp) => {
    const { id } = req.params;
    const { _id, password, google, ...info } = req.body

    if (password) {
        const salt = bcryptjs.genSaltSync();
        info.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, info)

    resp.status(200).json({
        ok: true,
        mensaje: 'PUT',
        usuario

    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}