const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuarioRuta = '/api/usuarios';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }
    routes() {
        this.app.use(this.usuarioRuta, require('../routes/user.routes'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`El puerto es: ${this.port}`)
        })
    }
}

module.exports = Server