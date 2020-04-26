const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas De Home
route.get('/', homeController.index);

// Rotas De Login
route.get('/login/index', loginController.index);
// Criando rota de registro -- Chamando método do controller.
route.post('/login/register', loginController.register);
// Criando rota de login -- Chamando método do controller.
route.post('/login/login', loginController.login);
route.get('/    login/logout', loginController.logout);
module.exports = route;
