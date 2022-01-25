import { config } from "../config";

var sql = require("mssql");

async function uspUpdatePayment(IdAbono: string, Anotaciones: string) {

    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = `EXEC uspUpdatePayment ${IdAbono}, \'${Anotaciones}\';`;

        // console.log(strQuery);
        
        // Executes string query
        let response = await request.query(strQuery);

        console.log("Update successfully: Payment updated\n");
        return response.recordset;

    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    };
}

export{uspUpdatePayment}