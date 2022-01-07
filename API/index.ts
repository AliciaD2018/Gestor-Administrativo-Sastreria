import { insertCustomers } from './endpoints/insertCustomer';
import { SelectMaterialsInventory } from './endpoints/selectMaterialsInventory';

var express = require('express');

const PORT = process.env.PORT || 4500;
const app = express();
const cors = require('cors');

app.use(insertCustomers);
app.use(SelectMaterialsInventory);

// CORS
app.use(cors());//para aceptar peticiones de un solo dominio. Sirve de protección


app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});