//Configurar express
const express = require('express');
const server = express()
//Rutas de la api
const { getUsuarios, createUser, userUpdate, userDelete, login} = require('./controlers/user.controler');
const { getAddress, addressUpdate, addressDelete, addressByclient, createAddress} = require('./controlers/address.controler');
const { getMovies, oneMovie } = require('./controlers/peliculas.controler');
const { createCart, cartByclient, cartDelete } = require('./controlers/cart.controler');
//Conexion Mongoose
const mongoose = require('mongoose');
const cors = require('cors')
//variables de entorno ENV
require('dotenv').config()
const port = process.env.PORT || 3000;
//Middleware
server.use(express.json())
server.use(cors());
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
//server.get('/direccions', getAddress);
server.post('/direccions', createAddress);
server.get('/direccions/:usuario', addressByclient);
server.put('/direccions/:id', addressUpdate);
server.delete('/direccions/:id', addressDelete);
//Peliculas
server.get('/peliculas', getMovies);
server.get('/peliculas/:id', oneMovie);
///Carrito
server.get('/carrito/:id', cartByclient);
server.post('/carrito/:usuario', createCart);
server.delete('/carrito/:id', cartDelete);
//Levantar servidor
server.listen(port, ()=>{console.log('Servidor funcionando' + port)})
}).catch((error)=>{
	console.log(error);
})

