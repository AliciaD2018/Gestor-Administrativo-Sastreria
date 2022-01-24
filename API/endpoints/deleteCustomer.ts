import express from 'express';
import { uspDeleteCustomer } from '../controllers/deleteCustomerController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.delete('/api/deletecustomer', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    try { // Los nombres de las variables de req.query['variable'],
          // se definen en el api.service.ts del front end
          // cuando se indican los parámetros en el string del URL
        uspDeleteCustomer(parseInt(<string>(req.query['id'])))
        .then( response => {
            // console.log(response);
            res.sendStatus(200);
            });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as deleteCustomer }
