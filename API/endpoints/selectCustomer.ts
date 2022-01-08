import express from 'express';
import { uspSelectCustomer } from '../controllers/selectClientesController';

const router = express();
const cors = require('cors');
router.use(cors());

router.get('/api/selectcustomer', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    try{
        uspSelectCustomer(<string>(req.query['cedula']))
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectCustomers}