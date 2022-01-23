import express from 'express';
import { uspSelectUnits } from '../controllers/selectUnitsController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectunits', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try{
        uspSelectUnits()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                unidadesdemedidas: response
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectUnits}