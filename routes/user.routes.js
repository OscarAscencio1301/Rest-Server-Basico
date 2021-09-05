const  {Router} = require('express');
const { usuariosGet, usuariosDelete, usuariosPut, usuariosPost } = require('../controllers/usuarios.controllers');
const router = Router();

router.get('/', usuariosGet)
router.delete('/', usuariosDelete)
router.put('/', usuariosPut )
router.post('/', usuariosPost)


module.exports = router;