import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RegistrarMaterialComponent } from '../registrarMaterial/registrarMaterial.component';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  @ViewChild(RegistrarMaterialComponent) importa: RegistrarMaterialComponent;

  columnas: string[] = ['codigo', 'descripcion','descorta', 'preciocompra', 'precioventa','cantidad', 'borrar'];

  public datos: Articulo[] = [];
  

  articuloselect: Articulo = new Articulo('', "", '', '', '', '');

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
      localStorage.setItem("inventario", JSON.stringify(this.datos));
    }
  }
   //-------Filtro de busqueda
   dataSource: any;
   ngOnInit() {
    if (localStorage.getItem("isFirstTime") === "true" || localStorage.getItem("isFirstTime") === null) {
      this.datos = [
        new Articulo('1001', 'pantalon jeans', 'panta', '9500', '24/12/2021', '5'),
        new Articulo('1002', 'pantalon', 'panta', '9500', '24/12/2021', '5'),
        new Articulo('1003', 'pantalon', 'panta', '9500', '24/12/2021', '5'),

      ]
      localStorage.setItem("inventario", JSON.stringify(this.datos));
      localStorage.setItem("isFirstTime", "false");
    }
    // extrae los datos del local storage
    const c = localStorage.getItem("inventario");
    if (c !== null) {
      this.datos = JSON.parse(c);
    }

    this.dataSource = new MatTableDataSource(this.datos);
   }
 
   filtrar(event: Event) {
     const filtro = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filtro.trim().toLowerCase();
   }
 
   agregar(): void {
    console.log("entra")

    this.importa.guardarInventario();
    console.log("PRueva");
    console.log(this.importa.inventario_nuevo)

    this.tabla1.renderRows();
    this.articuloselect = new Articulo('', '', '', '', '', '');

    console.log(this.datos)
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
