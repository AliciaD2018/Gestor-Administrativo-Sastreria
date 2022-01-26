import { config } from "../config";

var sql = require("mssql");

async function uspInsertClothing(IdOrden: string, NumeroPrenda: string, IdTipoPrenda: string,
                                 PrecioTrabajo: string, CantidadPrendas: string, FechaEncargo: string,
                                 FechaEntrega: string, DescripcionTrabajo: string) {
    
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = `EXEC uspInsertClothing ${IdOrden}, ${NumeroPrenda}, ${IdTipoPrenda},
                                               ${PrecioTrabajo}, ${CantidadPrendas}, \'${FechaEncargo}\',
                                               \'${FechaEntrega}\', \'${DescripcionTrabajo}\';`;

        console.log(strQuery);

        // Executes string query
        await request.query(strQuery);

        console.log("Insertion successfully: Clothing\n");

    }catch(error){
        console.log(error);
    };
}

export{uspInsertClothing}