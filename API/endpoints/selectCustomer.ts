import express from 'express';
import { uspSelectCustomer } from '../controllers/selectCustomerController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectcustomer', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    try {
        uspSelectCustomer(<string>(req.query['cedula']))
        .then( response => {
            // console.log(response);
            res.status(200).send({
                cliente: response
            });
        });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as selectCustomer }