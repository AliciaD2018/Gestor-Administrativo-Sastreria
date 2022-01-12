import { config } from "../config";

var sql = require("mssql");

async function uspSelectOrdersDetailsForCalendar() {
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = 'EXEC uspSelectOrdersDetailsForCalendar;';

        //console.log(strQuery);

        // Executes string query
        let response = await request.query(strQuery);

        console.log("Selection successfully: Orders details for calendar from all pending orders\n");
        return response.recordset;

    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    };
}

export{uspSelectOrdersDetailsForCalendar}