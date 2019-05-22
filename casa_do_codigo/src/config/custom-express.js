require('marco/node-require').install();
require('marco/express');


const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas.js');
rotas(app);

module.exports = app;