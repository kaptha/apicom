const addressModel = require('../models/address.model.js');

//GET
const getAddress = async (res) => {
	const direccion = await addressModel.find();
    console.log(direccion);
	res
	   .status(200)
	   .json({
        direccion: direccion
	   })
	   .send()
}
//PUT
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
    addressDelete
}