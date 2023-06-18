const addressModel = require('../models/address.model.js');


//POST
const createAddress = async (req, res) => {
	const { direccion, codigoPostal, ciudad, usuario} = req.body;
	const address = new addressModel({
		direccion: direccion,
		codigoPostal: codigoPostal, 
		ciudad: ciudad,
		usuario: usuario
	})
	await address.save()
	res 
	   .status(200)
	   .json({
	   	   message: 'Direccion creada'
	   })
}
//PUT
const addressByclient = async (req, res) => {
	const {usuario} = req.params;
	const address = await addressModel.find({usuario:usuario});
	console.log(address);
	res
	   .status(200)
	   .json({
        address: address
	   })
	   
}
const addressUpdate = async (req, res) => {
	const {id} =req.params;
	const { direccion, codigoPostal, ciudad} = req.body;
	await addressModel.findByIdAndUpdate(id, {		
		direccion: direccion, 
        codigoPostal: codigoPostal,
		ciudad: ciudad
	});
	res 
	   .status(200)
	   .json({
	   	    message: 'Actualizado'
	   })
	   
}
//DELETE
const addressDelete = async (req, res) => {
	const {id} =req.params;
	await addressModel.findOneAndDelete({id});
	res 
	   .status(200)
	   .json({
	   	    message: 'eliminado'
	   })
	   
}
module.exports = {
	addressUpdate,
    addressDelete,
	addressByclient,
	createAddress
}