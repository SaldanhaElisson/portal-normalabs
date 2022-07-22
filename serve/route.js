const express = require('express');
const path = require('path');

const userController = require('./controllers/userController');
const {auth} = require("./middlewares/auth");
const {isAuthenticated} = require("./controllers/isAtuhenticade");

const Router= express.Router()

Router.post("/authentic", auth);

Router.post('/register', userController.register);
Router.get('/login', isAuthenticated, userController.login);

// Router.post('/question/:room/:question/:action', questionControoler.index) // -> os dois pontos quer dizer que eu não sei o que vou passar
// implicitamente o questionControoler está recebendo res e req


// Router.post('/create-room', RoomControler.create)


module.exports = Router