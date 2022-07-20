const express = require('express');
const cors = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';

        //middlewares
        this.middlewares();

        this.routes();

    }

    middlewares(){

        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() ) ;
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use( this.userPath, require('../routes/user') );
    }

    listenServer(){
        this.app.listen(  this.port, () => {
            console.log('Server runing in the port ',  this.port );
        } );
    }
}


module.exports = Server;