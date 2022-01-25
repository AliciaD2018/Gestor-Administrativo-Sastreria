import express from 'express';
import { uspInsertClothing } from '../controllers/insertClothingController'; 

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.post('/api/insertclothing', (req, res) => {

    try{ // Los nombres de las variables de req.query['variable'],
         // se definen en el api.service.ts del front end
         // cuando se indican los parámetros en el string del URL
         uspInsertClothing(<string>(req.query['idOrden']), <string>(req.query['numeroPrenda']), <string>(req.query['idTipoPrenda']),
                          <string>(req.query['precioTrabajo']), <string>(req.query['cantidadPrendas']), <string>(req.query['fechaEncargo']),
                          <string>(req.query['fechaEntrega']), <string>(req.query['descripcionTrabajo']))
                        .then( response => {
                            res.sendStatus(200);
                        });
    }catch(err){
        res.sendStatus(500).send({
            error: err
        });
    }
});

export {router as insertClothing}