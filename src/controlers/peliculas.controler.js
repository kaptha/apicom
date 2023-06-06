const moviesModel = require('../models/peliculas.model.js');

//GET
const getMovies = async (res) => {
	const peliculas = await moviesModel.find();
    console.log(peliculas);
	res
	   .status(200)
	   .json({
        peliculas: peliculas
	   })
	   .send()
}
module.exports = {
	getMovies
}