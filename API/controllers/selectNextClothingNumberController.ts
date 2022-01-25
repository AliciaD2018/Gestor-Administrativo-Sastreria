import { config } from "../config";

var sql = require("mssql");

async function uspSelectNextClothingNumber(IdOrden: string) {
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = `EXEC uspSelectNextClothingNumber ${IdOrden};`;

        // console.log(strQuery);

        // Executes string query
        let response = await request.query(strQuery);

        console.log("Selection successfully: Next clothing number\n");
        return response.recordset;

    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    };
}

export{uspSelectNextClothingNumber}