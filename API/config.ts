// Azure Connection String
var config = {
    user: 'mataleiva',
    password: 'Sabado123',
    server: 'itcomputercr.database.windows.net', 
    database: 'SistemaGestorSastreriaDB',
    port: 1433,
    ssl:true,
    encrypt: true,
    options: {
        enableArithAbort: true
    }
};

// Local Connection String

// var config = {  
//   server: 'localhost',
//   port: 1433,
//   authentication: {
//       type: 'default',
//       options: {
//           userName: 'slsastreria',
//           password: 'admin'
//       }
//   },
//   options: {
//       // If you are on Microsoft Azure, you need encryption:
//       encrypt: false,
//       database: 'SistemaGestorSastreriaDB',
//       enableArithAbort: true // Silencia error de 'tedious deprecated'
//   }
// };

export { config }