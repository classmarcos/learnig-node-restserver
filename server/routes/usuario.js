const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const _ = require('underscore');

const app = express();

app.get('/', function(req, res) {
    console.log('hola marcos si funciona');
})

module.exports = app;