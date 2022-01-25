import { config } from "../config";

var sql = require("mssql");

async function uspUpdateMaterialInventory(IdMaterial: string, IdCategoria: string, IdUnidadMedida: string, 
                                 Descripcion: string, Cantidad: string,
                                 PrecioCompra: string, PrecioVenta: string) {

    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = `EXEC uspUpdateMaterialInventory ${IdMaterial}, ${IdCategoria}, ${IdUnidadMedida},
                                                      \'${Descripcion}\', ${Cantidad},
                                                        ${PrecioCompra}, ${PrecioVenta};`;

        // console.log(strQuery);
        
        // Executes string query
        let response = await request.query(strQuery);

        console.log("Update successfully: Material updated\n");
        return response.recordset;

    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    };
}

export{uspUpdateMaterialInventory}