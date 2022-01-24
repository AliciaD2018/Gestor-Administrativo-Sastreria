/**
 * Esta interface también se utiliza en popupModificarMaterial.component.ts
 * para solamente almacenar:
 *                          - Id y Unidad de Medida
 *                          - Id y Categoria
 */

export interface MaterialI {
    IdMaterial: string,
    Codigo: string,
    IdCategoria: string,
    Categoria: string,
    Descripcion: string,
    Cantidad: string,
    IdUnidad: string;
    UnidadMedida: string,
    PrecioCompra: string,
    PrecioVenta: string,
    FechaRegistro: string
}