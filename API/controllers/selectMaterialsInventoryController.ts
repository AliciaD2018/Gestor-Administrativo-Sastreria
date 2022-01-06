import { response } from "express";
import { config } from "../config";

var express = require('express');
var app = express();
var sql = require("mssql");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(bodyParser.json({ limit: '50mb'}));

async function uspSelectMaterialsInventory() {
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = 'EXEC uspSelectMaterialsInventory;';

        //console.log(strQuery);

        // Executes string query
        let response = await request.query(strQuery);

        console.log("Selection successfully: Materials from Inventory\n");
        return response.recordset;

    }catch(error){
        console.log("Something went wrong");
        //console.log(error.message);
    };
}

export{uspSelectMaterialsInventory}