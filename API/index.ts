import express from 'express';

import { insertCustomers } from './endpoints/insertCustomer';

const PORT = process.env.PORT || 4400;
const app = express();
// const cors = require('cors');
// const path = require("path");

app.use(insertCustomers);

//CORS
// app.use(cors());//para aceptar peticiones de un solo dominio. Sirve de protección


app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});