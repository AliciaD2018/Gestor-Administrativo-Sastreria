import express from 'express';
import { uspUpdatePayment } from '../controllers/updatePaymentController'; 

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.put('/api/updatepayment', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    try { // Los nombres de las variables de req.query['variable'],
          // se definen en el api.service.ts del front end
          // cuando se indican los parámetros en el string del URL
          uspUpdatePayment(<string>(req.query['idAbono']), <string>(req.query['anotaciones']))
            .then(response => {
                // console.log(response);
                res.sendStatus(200)
            });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as updatePayment }