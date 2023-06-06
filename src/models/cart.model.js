const {Schema, model} = require('mongoose');

const cartSchema = new Schema({
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

const cartModel = model('carrito', cartSchema);
module.exports = cartModel;