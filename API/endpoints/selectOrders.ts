import express from 'express';
import { uspSelectOrder } from '../controllers/selectOrderController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectorders', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try{
        uspSelectOrder()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                ordenes: response
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectOrders}