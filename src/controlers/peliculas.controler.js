const moviesModel = require('../models/peliculas.model.js');

//GET
const getMovies = async (req, res) => {
	try{
	const peliculas = await moviesModel.find();
    console.log(peliculas);
	return res
	   .status(200)
	   .json({
        peliculas: peliculas
	   })
	}catch(error){
		return res
	   .status(500)
	   .json({
        mensaje:"Error en el servidor"
	   })
	}
		
}
const oneMovie = async (req, res) => {
	const {id} =req.params;	
	const pelicula = await moviesModel.findOne({_id:id});
	console.log(pelicula);
	return res
	   .status(200)
	   .json({
        pelicula: pelicula
	   })	   
}
module.exports = {
	getMovies,
	oneMovie
}