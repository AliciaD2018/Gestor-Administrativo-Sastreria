import express from 'express';
import { uspSelectMaterialsInventory } from '../controllers/selectMaterialsInventoryController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectmissingmaterialsallorders', (req, res) => {
    res.setHeader('Content-Type', 'application/json');


    console.log("endpoint");
    
    try{
        uspSelectMaterialsInventory()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                materialesfaltantestodaslasordenes: response
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectMissingMaterialsAllOrders}