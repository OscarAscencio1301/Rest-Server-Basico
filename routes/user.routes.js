const  {Router} = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosDelete, usuariosPut, usuariosPost } = require('../controllers/usuarios.controllers');
const {esRolValido, emailExiste, existeId} = require('../helpers/db-validator');
const validarCampos = require('../middlewares/validarCampos');
const router = Router();

router.get('/' ,usuariosGet)


router.post('/', [
    check('nombre', 'El nombre  es Obligatorio').not().isEmpty(),
    check('correo').custom(emailExiste).isEmail(),
    check('password', 'El password es Obligatorio').isLength({min: 6, max: 12}),
    // check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(esRolValido),
    validarCampos
] , usuariosPost)


router.delete('/:id',[
    check('id', 'No es un ID valido').exists({checkNull: true}).isMongoId().bail().custom(existeId),
    validarCampos
] ,usuariosDelete)


router.put('/:id', [
    check('id', 'No es un ID valido').exists({checkNull: true}).isMongoId().bail().custom(existeId),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPut )


module.exports = router;