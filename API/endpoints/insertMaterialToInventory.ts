import express from 'express';
import { uspInsertMaterialToInventory } from '../controllers/insertMaterialInventoryController';

const router = express();

// Gestiona los headers para recursos de origenes cruzados (CORS)
// Debe ir antes de la ruta
const cors = require('cors');
router.use(cors());

router.post('/api/insertmaterialtoinventory', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try { // Los nombres de las variables de req.query['variable'],
          // se definen en el api.service.ts del front end
          // cuando se indican los parámetros en el string del URL
        uspInsertMaterialToInventory(<string>(req.query['codigo']), <string>(req.query['idCategoriaMaterial']), <string>(req.query['descripcion']),
            <string>(req.query['cantidad']), <string>(req.query['idUnidadMedida']), <string>(req.query['precioCompra']),
            <string>(req.query['precioVenta']), <string>(req.query['fechaRegistro']))
            .then(response => {
                // console.log("RESPONSE: ", response);
                res.sendStatus(200);
            });
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
});

export { router as insertMaterialToInventory }