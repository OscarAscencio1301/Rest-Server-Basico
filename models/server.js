const express = require('express')
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuarioRuta = '/api/usuarios';
        this.databaseConnect();
        this.middlewares();
        this.routes();
    }
    async databaseConnect() {
        await dbConection()
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