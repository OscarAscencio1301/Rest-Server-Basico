const mongoose = require("mongoose")

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
  
        console.log('Base de Datos Online')

    } catch (error) {
        throw new Error('Error en Mongo Atlas')
    }
}

module.exports = {
    dbConection
}