const { validationResult } = require("express-validator");

const validarCampos = (req, resp, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return resp.status(400).json({
            ok: false,
            msg: errors
        })
    }

    next()
}

module.exports = validarCampos;