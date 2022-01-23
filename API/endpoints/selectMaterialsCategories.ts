import express from 'express';
import { uspSelectMaterialsCategories } from '../controllers/selectMaterialsCategoriesController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectmaterialscategories', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try{
        uspSelectMaterialsCategories()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                categorias: response
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectMaterialsCategories}