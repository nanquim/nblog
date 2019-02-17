const express = require('express');
const consign = require('consign');
const expressValidator = require('express-validator');
const sessao = require('client-sessions');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
require('dotenv-safe').load();

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/paginas');

app.use(express.static('./app/publico/'));
app.use(express.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(sessao({
    cookieName: 'session',
    secret: process.env.SECRET,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

consign()
    .include('config/conectarBD.js')
    .then('app/modelos')
    .then('app/controles')
    .then('app/rotas')
    .into(app);

console.log('Instância do app criada');

module.exports = app;