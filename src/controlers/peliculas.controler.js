const moviesModel = require('../models/peliculas.model.js');

//GET
const getMovies = async (req, res) => {
	const peliculas = await moviesModel.find();
    console.log(peliculas);
	res
	   .status(200)
	   .json({
        peliculas: peliculas
	   })
	   .send()
}
const oneMovie = async (req, res) => {
	const {id} =req.params;	
	const pelicula = await moviesModel.findOne({_id:id});
	console.log(pelicula);
	res
	   .status(200)
	   .json({
        pelicula: pelicula
	   })
	   .send()
}
module.exports = {
	getMovies,
	oneMovie
}