import console from "console";
import { config } from "../config";

var sql = require("mssql");

async function uspInsertMaterialToInventory(Codigo: string, IdCategoriaMaterial: string, Descripcion: string,
                                            Cantidad: string, IdUnidadMedida: string, PrecioCompra: string,
                                            PrecioVenta: string, FechaRegistro: string) {

    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = `EXEC uspInsertMaterialToInventory ${Codigo}, ${IdCategoriaMaterial}, \'${Descripcion}\',
                                                          ${Cantidad}, ${IdUnidadMedida}, ${PrecioCompra},
                                                          ${PrecioVenta}, \'${FechaRegistro}\';`;

        console.log(strQuery);
        
        // Executes string query
        let response = await request.query(strQuery);

        console.log("Insertion successfully: Material inserted\n");
        return response.recordset;

    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    };
}

export{uspInsertMaterialToInventory}