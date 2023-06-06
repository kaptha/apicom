const {Schema, model} = require('mongoose');

const moviesSchema = new Schema({
    titulo:{
		type: String,
		required: true
	},
	director:{
		type: String,
		required: true,
		unique: true
	},	
	sinopsis:{
		type: String,
		required: true
	},
    pais:{
        type: String,
		required: true
    },
    Duracion:{
        type: String,
		required: true
    },
    link:{
        type: String,
		required: true
    },
    area:{
        type: String,
		required: true
    },
    foto:{
        type: String,
		required: true
    },
    precio:{
        type: Number,
		required: true
    },
    año:{
        type: Number,
		required: true
    }
}) 

const moviesModel = model('peliculas', moviesSchema);
module.exports = moviesModel;