const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Cancion = require('./routes/cancion');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/cancion',Cancion);

module.exports = App;