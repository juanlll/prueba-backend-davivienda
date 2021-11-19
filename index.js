'use strict';

const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes');
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use('/api', cors(corsOptions), productRoutes);
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.listen('2222', () => {
    console.log("Escuchando en el puerto 2222");
});