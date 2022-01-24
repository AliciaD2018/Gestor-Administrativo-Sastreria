import { selectMissingMaterialsAllOrders } from './endpoints/selectMissingMaterialsAllOrders';
import { selectOrdersDetailsForCalendar } from './endpoints/selectOrdersDetailsForCalendar';
import { selectPendingOrdersByWeek } from './endpoints/selectPendingOrdersByWeek';
import { selectMaterialsCategories } from './endpoints/selectMaterialsCategories';
import { selectMaterialsInventory } from './endpoints/selectMaterialsInventory';
import { selectAllCustomers } from './endpoints/selectAllCustomers';
import { insertCustomers } from './endpoints/insertCustomer';
import { selectCustomer } from './endpoints/selectCustomer';
import { selectOrders } from './endpoints/selectOrders';
import { updateCustomer } from './endpoints/updateCustomer';
import { selectPhonesTypes } from './endpoints/selectPhonesTypes';
import { selectAllOrders } from './endpoints/selectAllOrders';
import { selectNextOrderId } from './endpoints/selectNextOrderId';
import { sendEmail } from './endpoints/sendEmail';
import { deleteCustomer } from './endpoints/deleteCustomer';
<<<<<<< HEAD
import { selectUnits } from './endpoints/selectUnits';
=======
>>>>>>> d438604c7b190763e85ead122d97cf25b808358d

var express = require('express');

const PORT = process.env.PORT || 4500;
const app = express();

app.use(insertCustomers);
app.use(selectMissingMaterialsAllOrders);
app.use(selectOrdersDetailsForCalendar)
app.use(selectMaterialsInventory);
app.use(selectMaterialsCategories);
app.use(selectPendingOrdersByWeek);
app.use(selectAllCustomers);
app.use(selectCustomer);
app.use(updateCustomer);
app.use(selectOrders);
app.use(selectPhonesTypes);
app.use(selectAllOrders);
app.use(selectNextOrderId)
app.use(sendEmail);
app.use(deleteCustomer);
<<<<<<< HEAD
app.use(selectUnits)
=======
>>>>>>> d438604c7b190763e85ead122d97cf25b808358d

app.listen(PORT,()=>{
    console.log('Backend listening on port: ', PORT, '\n');
});