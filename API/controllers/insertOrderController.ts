import { config } from "../config";

var sql = require("mssql");

async function uspInsertOrder(IdCliente: string, FechaInicio: string) {
    
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = `EXEC uspInsertOrder ${IdCliente}, \'${FechaInicio}\';`;

        // console.log(strQuery);

        // Executes string query
        await request.query(strQuery);

        console.log("Insertion successfully: Order\n");

    }catch(error){
        console.log(error);
    };
}

export{uspInsertOrder}