const { Schema, model } = require('mongoose')

const UsuarioSchema = new Schema (
    {
    nombre : {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    password : {
        type:String,
        required: true
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('Usuarios', UsuarioSchema)

module.exports = User;