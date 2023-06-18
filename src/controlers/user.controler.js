const userModel = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const { generateJWT } = require('../utils/jwt.js');
//CRUD
//GET
const getUsuarios = async (req, res) => {
	const users = await userModel.find();
    console.log(users);
	res
	   .status(200)
	   .json({
	   	  users: users
	   })
	   .send()
}
//POST
const createUser = async (req, res) => {
	const { email, name, password} = req.body;
	const hash = bcrypt.hashSync(password, 10);
	const user = new userModel({
		email: email,
		name: name, 
		password: hash
	})
	await user.save()
	res 
	   .status(200)
	   .json({
	   	   message: 'Usuario creado'
	   })
}
//PUT
const userUpdate = async (req, res) => {
	const {id} =req.params;
	const { email, name, password} = req.body;
	await userModel.findByIdAndUpdate(id, {		
		name: name, 
        email: email,
		password: password
	});
	res 
	   .status(200)
	   .json({
	   	    message: 'Actualizado'
	   })
	   .send()
}
//DELETE
const userDelete = async (req, res) => {
	const {id} =req.params;
	await userModel.findOneAndDelete({id});
	res 
	   .status(200)
	   .json({
	   	    message: 'eliminado'
	   })
	   .send()
}
//Login
const login = async(req, res)=>{
	const { email, password} = req.body;
	const user = await userModel.findOne({email:email});
	if (!user){
	return res
		   .status(404)
		   .json({
			message: 'Usuario no encontrado'
		   })
		   
	}
	const isMatch = bcrypt.compareSync(password, user.password);
	if(isMatch){
		const token = generateJWT(user._id);
		return res
				  .status(200)
				  .json({
					message: 'Usuario logeado',
					user: {
						id: user.id,
						password: user.password,
						email: user.email
					},
					token:token
				  })
				  
	}else{
		return res
				  .status(401)
				  .json({
					message: 'Usuario incorrecto'
				  })
				  
	}
}
module.exports = {
	getUsuarios,
	createUser,
	userUpdate,
	userDelete,
	login
}