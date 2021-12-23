import express from 'express';

import { insertCustomers } from './endpoints/insertCustomer';

const PORT = 5000;
const app = express();

app.use(insertCustomers);

app.listen(PORT,()=>{
    console.log('Backend started up on port ', PORT);
});