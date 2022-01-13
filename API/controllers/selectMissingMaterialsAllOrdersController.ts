import { config } from "../config";

var sql = require("mssql");

async function uspSelectMissingMaterialsAllOrders() {
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = 'EXEC uspSelectMissingMaterialsAllOrders;';

        //console.log(strQuery);

        // Executes string query
        let response = await request.query(strQuery);

        console.log("Selection successfully: Missing materials from all orders\n");
        return response.recordset;

    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    };
}

export{uspSelectMissingMaterialsAllOrders}