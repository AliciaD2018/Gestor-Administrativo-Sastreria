import { config } from "../config";

var express = require('express');
var app = express();
var sql = require("mssql");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(bodyParser.json({ limit: '50mb'}));

async function uspDeleteCustomer(Cedula: string, NombreCompleto: string, Email: string, Direccion: string,
                                Observaciones: string, Telefono1: string, NotasTelefono1: string,
                                Telefono2: string, NotasTelefono2: string) {
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = 'EXEC uspInsertCustomer ';
        strQuery += Cedula + ', ' + NombreCompleto + ', ' + Email + ', ' + Direccion + ', ' + Observaciones + ', ' +
                    Telefono1 + ', ' + NotasTelefono1 + ', ' + Telefono2 + ', ' + NotasTelefono2 + ';';

        console.log(strQuery);

        // Executes string query
        await request.query(strQuery);

        console.log("Insertion successfully: Customer");

    }catch(error){
        console.log("Something went wrong");
        //console.log(error.message);
    };
}

export{uspDeleteCustomer}