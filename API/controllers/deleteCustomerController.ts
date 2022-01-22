import { config } from "../config";

var sql = require("mssql");

async function uspDeleteCustomer(Id: number) {
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        console.log("Controller, Id: ", Id);
        console.log("Controller, Type of Id: ",typeof Id);
        let strQuery = `EXEC uspDeleteCustomer ${Id};`;

        // console.log(strQuery);

        // Executes string query
        let response = await request.query(strQuery);

        console.log("Deletion successfully: Customer deleted\n");

        return response;

    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    };
}

export{uspDeleteCustomer}