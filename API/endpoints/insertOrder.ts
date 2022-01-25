import express from 'express';
import { uspInsertOrder } from '../controllers/insertOrderController'; 

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.post('/api/insertorder', (req, res) => {

    try{ // Los nombres de las variables de req.query['variable'],
         // se definen en el api.service.ts del front end
         // cuando se indican los parámetros en el string del URL
         uspInsertOrder(<string>(req.query['idCliente']), <string>(req.query['fechaInicio']))
                        .then( response => {
                            res.sendStatus(200);
                        });
    }catch(err){
        res.sendStatus(500).send({
            error: err
        });
    }
});

export {router as insertOrder}