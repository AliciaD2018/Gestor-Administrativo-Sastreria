/**
 * Se usa temporalmente el atributo Id de 'cliente' al instanciar
 * al PopupRegistrarClienteComponent para indicar el origen de la
 * instanciación
 * 0 = instanciación desde clientes.component.ts
 * 1 = instanciación desde crearOrden.component.ts
 */

export interface CustomerI{
    Id: string,
    Cedula: string,
    NombreCompleto: string,
    Email: string,
    Direccion: string,
    Observaciones: string,
    Telefono1: string,
    TipoTelefono1: string,
    NotasTelefono1: string,                       
    Telefono2: string,
    TipoTelefono2: string,
    NotasTelefono2: string
}