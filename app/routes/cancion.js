const express = require('express');
const CancionCtrl = require('../controllers/cancionController');

const Router = express.Router();

Router.get('/',CancionCtrl.index) // api.com/cancion/ Index: Listar todos las canciones
      .post('/',CancionCtrl.create)   // api.com/cancion/ Create: Crear una nueva cancion
      .get('/:key/:value',CancionCtrl.find,CancionCtrl.show)    // api.com/cancion/category/Hogar Show: Muestra una cancion en específico
      .put('/:key/:value',CancionCtrl.find,CancionCtrl.update)    // api.com/cancion/name/SamsungGalaxy Update: Actualizar una cancion en especifico
      .delete('/:key/:value',CancionCtrl.find,CancionCtrl.remove);// api.com/cancion/name/SamsungGalaxy

module.exports = Router;