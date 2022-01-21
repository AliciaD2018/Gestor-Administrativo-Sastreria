import express from 'express';
import { uspSelectOrdersDetailsForCalendar } from '../controllers/selectOrdersDetailsForCalendarController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectordersdetailsforcalendar', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try{
        uspSelectOrdersDetailsForCalendar()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                detallesordenesparacalendario: response
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectOrdersDetailsForCalendar}