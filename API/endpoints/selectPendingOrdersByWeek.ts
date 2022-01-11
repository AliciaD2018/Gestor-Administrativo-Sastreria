import express from 'express';
import { uspSelectPendingOrdersByWeek } from '../controllers/selectPendingOrdersByWeekController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectpendingordersbyweek', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try{
        uspSelectPendingOrdersByWeek(<string>(req.query['fechaActual']))
        .then( response => {
            // console.log(response);
            res.status(200).send({
                ordenesPendientesSemana: response
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectPendingOrdersByWeek}