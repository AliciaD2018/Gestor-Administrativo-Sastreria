import { selectMissingMaterialsAllOrders } from './endpoints/selectMissingMaterialsAllOrders';
import { selectPendingOrdersByWeek } from './endpoints/selectPendingOrdersByWeek';
import { SelectMaterialsCategories } from './endpoints/selectMaterialsCategories';
import { selectMaterialsInventory } from './endpoints/selectMaterialsInventory';
import { selectAllCustomers } from './endpoints/selectAllCustomers';
import { insertCustomers } from './endpoints/insertCustomer';
import { selectCustomer } from './endpoints/selectCustomer';
import { selectOrders } from './endpoints/selectOrders';

var express = require('express');

const PORT = process.env.PORT || 4500;
const app = express();

app.use(insertCustomers);

app.use(selectMissingMaterialsAllOrders);
app.use(selectMaterialsInventory);
app.use(SelectMaterialsCategories);
app.use(selectPendingOrdersByWeek);
app.use(selectAllCustomers);
app.use(selectCustomer);
app.use(selectOrders);

app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});