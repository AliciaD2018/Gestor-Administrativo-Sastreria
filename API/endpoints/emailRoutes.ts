const express = require ('express');
const app = express();

let cors=require('cors');
let envio=require('../controllers/correoController');
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.post('/envio',envio.envioCorreo);
export {app as emailcorreo}