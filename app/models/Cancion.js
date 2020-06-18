const mongoose = require('mongoose');

const CancionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },  
    genero: {
        type: String,
        required: true,
        enum: ['Bachata','Reggeton','Rock', 'Cumbia', 'Electronica', 'Clasica', 'Otro']
    },
    duracion: {
        type: String,
        required: true
    },
    artista: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    },
    rankin: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    pais: {
        type: String,
        required: true,
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

const Cancion = mongoose.model('Cancion',CancionSchema);

module.exports = Cancion;