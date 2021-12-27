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

  columnas: string[] = [ 'codigo','descripcion','descorta','cantidad', 'fecharegistro','precio', 'borrar'];

  public datosi: Articulo[] = [];


  articuloselect: Articulo = new Articulo('', "", '', '', '', '');

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datosi.splice(cod, 1);
      this.tabla1.renderRows();
      localStorage.setItem("inventarios", JSON.stringify(this.datosi));
    }
  }
   //-------Filtro de busqueda
   dataSource: any;
   ngOnInit() {
    if (localStorage.getItem("isFirstTime") === "true" || localStorage.getItem("isFirstTime") === null) {
      this.datosi = [
        new Articulo('1001', 'pantalon jeans', 'panta', '9500', '24/12/2021', '5'),
        new Articulo('1002', 'pantalon', 'panta', '9500', '24/12/2021', '5'),
        new Articulo('1003', 'pantalon', 'panta', '9500', '24/12/2021', '5'),

      ]
      localStorage.setItem("inventarios", JSON.stringify(this.datosi));
      localStorage.setItem("isFirstTime", "false");
    }
    // extrae los datosi del local storage
    const c = localStorage.getItem("inventarios");
    if (c !== null) {
      this.datosi = JSON.parse(c);
    }

    this.dataSource = new MatTableDataSource(this.datosi);
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

    console.log(this.datosi)
  }
}

export class Articulo {
  constructor(//'codigo', 'descripcion','descorta', 'precio', 'fecharegistro','cantidad', 'borrar'
    public cantidad: string,
    public codigo: string,
    public descorta: string,
    public descripcion: string,
    public fecharegistro: string,
    public precio: string
    ) { }

}
