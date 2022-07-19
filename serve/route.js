const express = require('express');
const path = require('path');

const registerController = require('./controllers/registerController')

const Router= express.Router()

Router.get('/', (req,res) =>{
    res.send("hello word");
}) // abrir a sala com o id, aqui estamos passando o id  
// Router.post('/enterRoom', RoomControler.enter)

// forma para passar os valores da questões para o controller
Router.post('/register', registerController.create);
// Router.post('/question/:room/:question/:action', questionControoler.index) // -> os dois pontos quer dizer que eu não sei o que vou passar
// implicitamente o questionControoler está recebendo res e req


// Router.post('/create-room', RoomControler.create)


module.exports = Router