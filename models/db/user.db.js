const { Schema, model } = require('mongoose');

const UserSchema = Schema( {
    name : {
        type: String,
        required : [ true, 'El nombre es obligatorio']
    },
    email : {
        type: String,
        required : [ true, 'El email es obligatorio'],
        unique: true
    },
    password : {
        type: String,
        required : [ true, 'El password es obligatorio'],
       
    },
    img : {
        type: String,   
    
    },
    role : {
        type: String,   
        required : true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status : {
        type: Boolean,   
        default: true
    
    },
    
    google : {
        type: Boolean,   
        default: false
    
    }

} );

module.exports = model( 'User', UserSchema );