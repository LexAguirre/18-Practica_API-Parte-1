const express = require("express");
const router = express.Router();
//Ejecutamos una extencion de express donde enviara como enrutar al archivo server.js
const mongoose = require("../node_modules/mongoose");
let Person = require("../models/person");

router.get("/person", (req, res, next) => {
  Person.find(function (err, person) {
    if (err) return next(err);
    res.json(person);
  });
});

module.exports = router;
