import express from 'express';
import { uspSelectPhonesTypes } from '../controllers/selectPhonesTypesController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectphonestypes', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try{
        uspSelectPhonesTypes()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                tipostelefonos: response
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectPhonesTypes}