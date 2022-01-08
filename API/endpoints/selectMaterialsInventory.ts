import express from 'express';
import { uspSelectMaterialsInventory } from '../controllers/selectMaterialsInventoryController';

const router = express();
const cors = require('cors');
router.use(cors());

router.get('/api/selectmaterialsinventory', (req, res) => {
    res.setHeader('Content-Type', 'application/json');


    console.log("endpoint");
    
    try{
        uspSelectMaterialsInventory()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                materiales: response
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as SelectMaterialsInventory}