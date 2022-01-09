import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RegistrarMaterialComponent } from '../registrarMaterial/registrarMaterial.component';
import { ApiService } from '../../services/api/api.service';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  public info: Array<any>;

  constructor(private api: ApiService) {
    this.info = [];
  }

  @ViewChild(RegistrarMaterialComponent) importa: RegistrarMaterialComponent;

  columnas: string[] = ['codigo', 'descripcion', 'categoria', 'cantidad', 'fecharegistro', 'precio', 'borrar'];

  private datos: Array<Articulo> = [];



  //datos.push({cantidad:material['Cantidad'],codigo:material['Codigo'],categoria:material['Categoria'],descripcion:material['Descripcion'],fecharegistro:material['FechaRegistro'],precio:material['PrecioVenta']});

  articuloselect: Articulo = new Articulo('', "", '', '', '', '');

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
    this.agregaMateriales();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregaMateriales(): void {
    const promise = this.api.selectMaterialsInventory().then()
    promise.then((data) => {
      //console.log(JSON.stringify(data));
      for (var index of data) {

        this.datos.push({
          cantidad: index['Cantidad'], codigo: index['Codigo'],
          categoria: index['Categoria'], descripcion: index['Descripcion'],
          fecharegistro: index['FechaRegistro'], precio: index['PrecioVenta']
        });
        //console.log(index);
      }

      //Se realiza la carga en la tabla general html del inventario.
      const articulos = JSON.stringify(this.datos);
      this.datos = JSON.parse(articulos);
      this.dataSource = new MatTableDataSource(this.datos);

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });

  }

}

export class Articulo {
  constructor(//'codigo', 'descripcion','categoria', 'precio', 'fecharegistro','cantidad', 'borrar'
    public cantidad: string,
    public codigo: string,
    public categoria: string,
    public descripcion: string,
    public fecharegistro: string,
    public precio: string
  ) { }

}
