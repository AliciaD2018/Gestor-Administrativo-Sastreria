import express from 'express';
import { uspSelectClothingsByOrder } from '../controllers/selectClothingsByOrderController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectclothingsbyorder', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try{
        uspSelectClothingsByOrder(<string>(req.query['idOrden']))
        .then( response => {
            // console.log(response);
            res.status(200).send({
                prendas: response // Este es el nombre con el cual se recibe la respuesta en el api.service.ts
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectClothingsByOrder}