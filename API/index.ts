import { insertCustomers } from './endpoints/insertCustomer';
import { selectCustomers } from './endpoints/selectCustomer';
import { SelectMaterialsInventory } from './endpoints/selectMaterialsInventory';
import { selectMissingMaterialsAllOrders } from './endpoints/selectMissingMaterialsAllOrders';
import { selectPendingOrdersByWeek } from './endpoints/selectPendingOrdersByWeek';

var express = require('express');

const PORT = process.env.PORT || 4500;
const app = express();

app.use(insertCustomers);
app.use(SelectMaterialsInventory);
app.use(selectMissingMaterialsAllOrders);
app.use(selectCustomers);
app.use(selectPendingOrdersByWeek);

app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});