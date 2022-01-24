import { config } from "../config";

var sql = require("mssql");

async function uspDeleteMaterial(Id: number) {
    console.log("Borrar: ", Id);
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = `EXEC uspDeleteMaterial ${Id};`;

        // console.log(strQuery);

        // Executes string query
        let response = await request.query(strQuery);

        console.log("Deletion successfully: Material deleted\n");

        return response;

    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    };
}

export{uspDeleteMaterial}