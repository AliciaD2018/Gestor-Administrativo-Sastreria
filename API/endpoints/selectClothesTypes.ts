import express from 'express';
import { uspSelectClothesTypes } from '../controllers/selectClothesTypesController'; 

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.get('/api/selectclothestypes', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try{
        uspSelectClothesTypes()
        .then( response => {
            // console.log(response);
            res.status(200).send({
                tiposprendas: response // Este es el nombre con el cual se recibe la respuesta en el api.service.ts
            });
        });
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as selectClothesTypes}