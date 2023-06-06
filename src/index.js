//Configurar express
const express = require('express');
const server = express()
//Rutas de la api
const { getUsuarios, createUser, userUpdate, userDelete, login} = require('./controlers/user.controler');
const { getAddress, addressUpdate, addressDelete} = require('./controlers/address.controler');
const { getMovies } = require('./controlers/peliculas.controler');
//Conexion Mongoose
const mongoose = require('mongoose');
//variables de entorno ENV
require('dotenv').config()
const port = process.env.PORT || 3000;
//Middleware
server.use(express.json())
//Conexion mongo DB
mongoose.connect(process.env.HOSTDB).then(()=>{
	console.log('conexion a mongoDB');
	//Verbos
//Usuarios
server.get('/user', getUsuarios);
server.post('/user', createUser);
server.put('/user:id', userUpdate);
server.delete('/user/:id', userDelete);
server.post('/user/login', login);
//Direcciones
server.get('/direccion', getAddress);
server.put('/direccion:id', addressUpdate);
server.delete('/direccion/:id', addressDelete);
//Peliculas
server.get('/peliculas', getMovies);
//Levantar servidor
server.listen(port, ()=>{console.log('Servidor funcionando' + port)})
}).catch((error)=>{
	console.log(error);
})

