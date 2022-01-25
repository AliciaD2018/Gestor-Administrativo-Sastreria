import { config } from "../config";

var sql = require("mssql");

async function uspInsertPayment(IdOrden: string, SaldoAnterior: string, MontoAbono: string,
                                NuevoSaldo: string, Anotaciones: string, FechaAbono: string) {
    
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = `EXEC uspInsertPayment ${IdOrden}, ${SaldoAnterior}, ${MontoAbono},
                                             ${NuevoSaldo}, \'${Anotaciones}\', \'${FechaAbono}\';`;

        // console.log(strQuery);

        // Executes string query
        await request.query(strQuery);

        console.log("Insertion successfully: Payment\n");

    }catch(error){
        console.log(error);
    };
}

export{uspInsertPayment}