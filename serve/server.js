const express = require('express');
const path = require('path');
const route = require('./route')
const cors = require('cors')

const server = express(); // -> executando o express server
server.use(express.json())
server.use(cors());

server.use(express.urlencoded({extended: true})) // hablitando o middlware

server.use(route);

server.listen(3007, () => {
    console.log('Servidor rodando na porta 3007...')
})