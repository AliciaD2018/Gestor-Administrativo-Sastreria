import { insertCustomers } from './endpoints/insertCustomer';
import { selectCustomer } from './endpoints/selectCustomer';
<<<<<<< HEAD
import { SelectAllCustomers } from './endpoints/selectAllCustomers';
=======
import { selectCustomers } from './endpoints/selectCustomers';
>>>>>>> 2b5b887d7f8ad1fca01b70b5c2417de6fa626dba
import { SelectMaterialsInventory } from './endpoints/selectMaterialsInventory';
import { selectMissingMaterialsAllOrders } from './endpoints/selectMissingMaterialsAllOrders';
import { selectOrders } from './endpoints/selectOrders';
import { selectPendingOrdersByWeek } from './endpoints/selectPendingOrdersByWeek';

var express = require('express');

const PORT = process.env.PORT || 4500;
const app = express();

app.use(insertCustomers);


app.use(SelectMaterialsInventory);
app.use(selectMissingMaterialsAllOrders);
app.use(selectCustomer);
<<<<<<< HEAD
app.use(SelectAllCustomers);
=======
app.use(selectCustomers);
>>>>>>> 2b5b887d7f8ad1fca01b70b5c2417de6fa626dba
app.use(selectPendingOrdersByWeek);
app.use(selectOrders);

app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});