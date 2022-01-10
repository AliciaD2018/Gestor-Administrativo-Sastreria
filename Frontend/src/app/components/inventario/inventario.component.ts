import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RegistrarMaterialComponent } from '../registrarMaterial/registrarMaterial.component';
import { ApiService } from '../../services/api/api.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  constructor(private api: ApiService) { }

  @ViewChild(RegistrarMaterialComponent) importa: RegistrarMaterialComponent;

  columnas: string[] = ['codigo', 'categoria', 'descripcion', 'cantidad', 'unidadmedida', 'precio', 'fecharegistro', 'borrar'];

  private datos: Array<Articulo> = [];

  //datos.push({cantidad:material['Cantidad'],codigo:material['Codigo'],categoria:material['Categoria'],descripcion:material['Descripcion'],fecharegistro:material['FechaRegistro'],precio:material['PrecioVenta']});

  articuloselect: Articulo = new Articulo('', '', '', '', '', '', '');

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }
  //-------Filtro de busqueda
  dataSource: any;
  ngOnInit() {


    this.agregar();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregar(): void {
    let materiales = this.api.selectMaterialsInventory().then(
      function (result) {
        let datos2: Array<Articulo> = [];
        // console.log(result[0]);
        for (let index = 0; index < result.length; index++) {
          const material = result[index];
          // console.log(material['Descripcion']);
          datos2.push({ codigo: material['Codigo'], categoria: material['Categoria'], descripcion: material['Descripcion'], cantidad: material['Cantidad'], unidadmedida: material['UnidadMedida'], precio: material['PrecioVenta'], fecharegistro: material['FechaRegistro']});
        }
        console.log(datos2);
        return datos2;
      }
    );
    console.log(materiales);
    this.datos.push({ codigo: 'TEL015', categoria: 'TELAS', descripcion: 'TELA BARATA', cantidad: '13', unidadmedida: 'm',fecharegistro: '05/01/2022', precio: '890' });
    const articulos = JSON.stringify(this.datos);
    this.datos = JSON.parse(articulos);
    this.dataSource = new MatTableDataSource(this.datos);
  }
}

export class Articulo {
  constructor(//'codigo','categoria' , 'descripcion', 'cantidad', 'unidadmedida', 'precio', 'fecharegistro', 'borrar'
    public codigo: string,
    public categoria: string,
    public descripcion: string,
    public cantidad: string,
    public unidadmedida: string,
    public fecharegistro: string,
    public precio: string
  ) { }

}
