import express, { response } from 'express';
import { uspInsertCustomer } from '../controllers/insertCustomerController';

const router = express();

router.post('/api/insertcustomer', (req, res) => {
    res.set('Acces-Control-Allow-Origin', '*');

    console.log("Executing endpoint...\n")
    try{
        uspInsertCustomer(<string>(req.query['cedula']), <string>(req.query['nombreCompleto']), <string>(req.query['email']),
                        <string>(req.query['direccion']), <string>(req.query['observaciones']), <string>(req.query['telefono1']),
                        <string>(req.query['notasTelefono1']), <string>(req.query['telefono2']), <string>(req.query['notasTelefono2']))
                        .then( response => {
                            console.log(response)
                            res.status(200).send({
                                respuesta: response
                            })
                        })
    }catch(err){
        res.status(500).send({
            error: err
        });
    }
});

export {router as insertCustomers}