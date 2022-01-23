import console from "console";
import { config } from "../config";

var sql = require("mssql");

async function uspUpdateCustomer(Id: string, NombreCompleto: string,
                                 Email: string, Direccion: string, Observaciones: string,
                                 Telefono1: string, TipoTelefono1: string, NotasTelefono1: string,
                                 Telefono2: string, TipoTelefono2: string, NotasTelefono2: string) {

    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = `EXEC uspUpdateCustomer ${Id}, \'${NombreCompleto}\',
                                             \'${Email}\', \'${Direccion}\', \'${Observaciones}\',
                                               ${Telefono1}, \'${TipoTelefono1}\', \'${NotasTelefono1}\',
                                               ${Telefono2}, \'${TipoTelefono2}\', \'${NotasTelefono2}\';`;

        // console.log(strQuery);
        
        // Executes string query
        let response = await request.query(strQuery);

        console.log("Update successfully: Customer updated\n");
        return response.recordset;

    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    };
}

export{uspUpdateCustomer}