const {response, request} = require('express')

const usuariosGet = (req = request, resp = response) => {
    const {q, nombre} = req.query
    resp.status(200).json({
        ok: true,
        mensaje: 'GET del Controlador',
        q,
        nombre
    })

}

const usuariosDelete = (req, resp) => {
    resp.status(201).json({
        ok: true,
        mensaje: 'DELETE'
    })
}

const usuariosPost = (req, resp) => {
    const {edad, nombre}  = req.body
    resp.status(201).json({
        ok: true,
        mensaje: 'POST',
        edad,
        nombre
    })
}



const usuariosPut = (req, resp) => {
    resp.status(200).json({
        ok: true,
        mensaje: 'PUT'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}