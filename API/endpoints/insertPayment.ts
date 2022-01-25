import express from 'express';
import { uspInsertPayment } from '../controllers/insertPaymentController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.post('/api/insertpayment', (req, res) => {

    try{ // Los nombres de las variables de req.query['variable'],
         // se definen en el api.service.ts del front end
         // cuando se indican los parámetros en el string del URL
         uspInsertPayment(<string>(req.query['idOrden']), <string>(req.query['saldoAnterior']), <string>(req.query['montoAbono']),
                          <string>(req.query['nuevoSaldo']), <string>(req.query['anotaciones']), <string>(req.query['fechaAbono']))
                        .then( response => {
                            res.sendStatus(200);
                        });
    }catch(err){
        res.sendStatus(500).send({
            error: err
        });
    }
});

export {router as insertPayment}