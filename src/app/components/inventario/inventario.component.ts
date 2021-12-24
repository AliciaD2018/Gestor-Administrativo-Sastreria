import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent{

  filtropost = '';

  columnas: string[] = ['codigo', 'descripcion','descorta', 'precio', 'fecharegistro', 'cantidad', 'borrar'];

  public datos: Articulo[] = [
    new Articulo('1001', 'pantalon jeans', 'panta', '9500', '24/12/2021', '5'),
    new Articulo('1002', 'pantalon', 'panta', '9500', '24/12/2021', '5'),
    new Articulo('1003', 'pantalon', 'panta', '9500', '24/12/2021', '5')
  ];

  articuloselect: Articulo = new Articulo('', "", '', '', '', '');

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  
  agregar() {
    this.datos.push(new Articulo(this.articuloselect.codigo, this.articuloselect.descripcion,
      this.articuloselect.descorta, this.articuloselect.precio,
      this.articuloselect.fecharegistro, this.articuloselect.cantidad));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo('', '', '', '', '', '');
  }
}

export class Articulo {
  constructor(
    public codigo: string,
    public descripcion: string,
    public descorta: string,
    public precio: string,
    public fecharegistro: string,
    public cantidad: string
    ) { }

}
