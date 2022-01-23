export interface AdvertenciaI{
    Pregunta: string,   // Advertencia a mostrar al usuario
    Dato: string,       // Dato relacionado a la advertencia, para mostrarlo al usuario
    IdDato: string,     // Id dato relacionado a la advertencia para transacciones con la BD
    Orden: number,      // Función a ejecutar, varía según desde donde se origine la advertencia.
}

/**
 * Orden
 * 0 = Eliminar cliente
 * 1 = Eliminar material del inventario
 * 2 = Eliminar material de una orden
 * 3 = Eliminar abono de una orden
 * 4 = Eliminar prenda de una orden
 * 5 = Eliminar una órden
 */