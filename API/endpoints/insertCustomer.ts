import express from 'express';
import { uspInsertCustomer } from '../controllers/insertCustomerController';

const router = express();

router.get('/api/insertcustomer', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    try{
        uspInsertCustomer(<string>(req.query['cedula']), <string>(req.query['nombreCompleto']), <string>(req.query['email']),
                        <string>(req.query['direccion']), <string>(req.query['observaciones']), <string>(req.query['telefono1']),
                        <string>(req.query['notasTelefono1']), <string>(req.query['telefono2']), <string>(req.query['notasTelefono2']))
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as insertCustomers}