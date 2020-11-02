require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./databases/config');
const cors = require('cors')


const app = express();

app.use(cors());

//Conectarse a Base de Datos
dbConnection();

app.listen(3300, () => {
    console.log("Servidor Corriendo");
});


//WB44gySymR72nrUu
//mean_user
app.get('/', (req, resp) => {
    resp.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});