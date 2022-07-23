const express = require('express');
const path = require('path');

const userController = require('./controllers/userController');
const {auth} = require("./middlewares/auth");
const {isAuthenticated} = require("./controllers/isAtuhenticade");

const Router= express.Router()

Router.post("/authentic", auth);

Router.post('/register', userController.register);
Router.get('/login', isAuthenticated, userController.login);

module.exports = Router