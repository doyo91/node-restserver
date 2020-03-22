require('./config/config'); // Archivo de configuración se carga primero

const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');


const app = express();
const bodyParser = require('body-parser');

/* ***** Middlewares ****** */

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/* ***************** */

// Rutas (controller)
app.use(require('./controller/usuario.controller'));


// Conectar DB
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {

        if (err) throw err;

        console.log('Base de datos: ' + 'ONLINE'.green);
    });




app.listen(process.env.PORT, function() {
    console.log('Escuchando puerto: ', process.env.PORT.yellow);
});