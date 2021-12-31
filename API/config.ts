var config = {  
  server: 'localhost',
  port: 1433,
  authentication: {
      type: 'default',
      options: {
          userName: 'slsastreria',
          password: 'admin'
      }
  },
  options: {
      // If you are on Microsoft Azure, you need encryption:
      encrypt: false,
      database: 'SistemaGestorSastreriaDB',
      enableArithAbort: true // Silencia error de 'tedious deprecated'
  }
};

export { config }