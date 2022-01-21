import express from 'express';
import { uspSelectAllCustomers } from '../controllers/selectAllCustomersController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectallcustomers', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    try {
        uspSelectAllCustomers()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                clientes: response
            });
        });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as selectAllCustomers }
