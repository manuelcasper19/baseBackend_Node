const { Router } = require('express');
const { check } = require('express-validator');

const { userGet, userPost, userPut, userDelete } = require('../controller/user');
const { validarCamposCorrectos } = require('../middlewares/validate_campos');
const router = Router();

router.get('/',  userGet );

router.post('/', [
    check('name', 'el nombre no es valido').not().isEmpty(),
    check('email', 'el email no es valido').isEmail(),
    check('password', 'el password no es valido y debe tener 1 a 6 caracteres').isLength( { min: 6 }),
    check('role', 'el role no es valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCamposCorrectos

], userPost);

router.put('/:id', userPut );

router.delete('/',  userDelete);     


module.exports = router;