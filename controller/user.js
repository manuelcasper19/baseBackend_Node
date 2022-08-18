const Usuario = require('../models/db/user.db' );
const bcryptjs = require('bcryptjs');


const userGet = (req, res) => {
    res.json({
        
        msg: 'Stiven Controlador get'
    });
  }

 const userPost = async (req, res) => {

     const { name, email, password, role } = req.body;
     
     const usuario = new Usuario( { name, email, password, role } );

     //verificar correo existe
     const emailExiste = await Usuario.findOne( { email });
     if( emailExiste ){
       return res.status(400).json({
          msg: 'El email ya existe, intente con otro'
       });
     }

    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync( password, salt );

    //Guardar en DB
     await usuario.save();
     //console.log( req );
    res.status(200).json({
        
       usuario
    });
  } 

  const userPut = (req, res) => {
      //const id = req.params.id;
      const { id } = req.params;
    res.json({
       msg: 'Stiven controller put',
       id
    });
  }

  const userDelete = (req, res) => {
    res.json({
        msg: 'Stiven H delete'
    });
  }

  module.exports = { 
      userGet,
      userPost,
      userPut,
      userDelete
  };