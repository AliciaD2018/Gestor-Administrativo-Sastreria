import express from 'express';
import { uspSelectNextOrderId } from '../controllers/selectNextOrderIdController'

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectnextorderid', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    try {
        uspSelectNextOrderId()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                idsiguienteorden: response
            });
        });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as selectNextOrderId }