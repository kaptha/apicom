const addressModel = require('../models/address.model.js');

//GET
const getAddress = async (req, res) => {
	const direccion = await addressModel.find();
    console.log(direccion);
	res
	   .status(200)
	   .json({
        direccion: direccion
	   })
	   .send()
}
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
	   	   message: 'Direecion creada'
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
	   .send()
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
	   .send()
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
	   .send()
}
module.exports = {
	getAddress,
    addressUpdate,
    addressDelete,
	addressByclient,
	createAddress
}