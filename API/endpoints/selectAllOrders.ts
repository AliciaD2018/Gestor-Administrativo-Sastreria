import express from 'express';

import { uspSelectAllOrders } from '../controllers/selectAllOrdersController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectallorders', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    try {
        uspSelectAllOrders()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                ordenes: response // Este es el nombre con el cual se recibe la respuesta en el api.service.ts
            });
        });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as selectAllOrders }
