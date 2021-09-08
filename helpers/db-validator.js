const Role = require('../models/rol');
const Usuario = require('../models/usuario')

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no existe`)
    }
}




const emailExiste = async(correo = '') => {
    const emailExiste = await Usuario.findOne({correo});
    if(emailExiste){
        throw new Error(`El correo ${correo} existe`)
    }
}

const existeId = async(id) => {
    const idExiste = await Usuario.findById(id)
    if(!idExiste){
        throw new Error(`El id ${id} no existe`)
    }
}

module.exports = {esRolValido, emailExiste, existeId};