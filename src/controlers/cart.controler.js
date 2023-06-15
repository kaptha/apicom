const cartModel = require('../models/cart.model.js');


//POST
const createCart = async (req, res) => {
	//const { direccion, codigoPostal, ciudad, usuario} = req.body;
	const cart = new cartModel({
		direccion: direccion,
		codigoPostal: codigoPostal, 
		ciudad: ciudad,
		usuario: usuario
	})
	await cart.save()
	res 
	   .status(200)
	   .json({
	   	   message: 'Producto agregado'
	   })
}
//PUT
const cartByclient = async (req, res) => {
	const {usuario} = req.params;
	const cart = await cartModel.find({usuario:usuario});
	console.log(cart);
	res
	   .status(200)
	   .json({
        cart: cart
	   })
	   .send()
}
//DELETE
const cartDelete = async (req, res) => {
	const {id} =req.params;
	await cartModel.findOneAndDelete({id});
	res 
	   .status(200)
	   .json({
	   	    message: 'Producto eliminado'
	   })
	   .send()
}
module.exports = {	
    createCart,
	cartByclient,
	cartDelete
}