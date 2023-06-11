const {Schema, model} = require('mongoose');

const addressSchema = new Schema({
    direccion:{
		type: String,
		required: true
	},
	codigoPostal:{
		type: Number,
		required: true,
		unique: true
	},	
	ciudad:{
		type: String,
		required: true
	},
    usuario:{
        type: String,
		required: true
    }
}) 

const addressModel = model('direccions', addressSchema);
module.exports = addressModel;