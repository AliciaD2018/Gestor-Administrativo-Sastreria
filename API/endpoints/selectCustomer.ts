import express from 'express';
// CAMBIAR POR CONTROLLER CORRECTO
import { uspSelectCustomer } from '../controllers/selectClientesController';

const app = express();

app.get('/api/selectcustomer', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    try{
        // CAMBIAR POR FUNCION CORRECTA
        uspSelectCustomer(<string>(req.query['cedula']))
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

// CAMBIAR NOMBRE DE EXPORTACION
export {app as selectCustomers}