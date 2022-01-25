export interface AdvertenciaI{
    Titulo: string,     // Título del pop up
    Pregunta: string,   // Advertencia a mostrar al usuario
    Dato: string,       // Dato relacionado a la advertencia, para mostrarlo al usuario
    IdDato: string,     // Id dato relacionado a la advertencia para transacciones con la BD
    Orden: number,      // Función a ejecutar, varía según desde donde se origine la advertencia.
    Boton1: string,     // Texto del botón 1 (izq.)
    Boton2: string,      // Texto del botón 2 (der.)
    Icono0: string,     // Icono para la ventana
    Icono1: string,     // Icono para el botón 1
    Icono2: string     // Icono para el botón 2
}

/**
 * Orden
 * 0 = Eliminar cliente
 * 1 = Eliminar material del inventario
 * 2 = Eliminar material de una orden
 * 3 = Eliminar abono de una orden
 * 4 = Eliminar prenda de una orden
 * 5 = Eliminar una órden
 * 6 = Orden sin saldos pendientes
 */