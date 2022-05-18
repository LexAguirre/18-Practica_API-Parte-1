const express = require("express");
const router = express.Router();
//Ejecutamos una extencion de express donde enviara como enrutar al archivo server.js
const mongoose = require("../node_modules/mongoose"); //busca un directorio en especial
let Person = require("../models/person");

router.get("/person", (req, res, next) => {
  Person.find(function (err, person) {
    if (err) return next(err);
    res.json(person);
  });
});
// Se crea una ruta a la cual va a poder acceder el servidor para poder observar la colecion
module.exports = router;
