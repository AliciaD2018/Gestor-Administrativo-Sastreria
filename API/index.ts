import { insertCustomers } from './endpoints/insertCustomer';
import { selectCustomers } from './endpoints/selectCustomer';
import { SelectMaterialsInventory } from './endpoints/selectMaterialsInventory';

var express = require('express');

const PORT = process.env.PORT || 4500;
const app = express();

app.use(insertCustomers);
app.use(SelectMaterialsInventory);
app.use(selectCustomers);

app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});