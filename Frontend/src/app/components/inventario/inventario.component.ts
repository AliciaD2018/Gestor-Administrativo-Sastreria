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


  constructor(private api: ApiService) {
  }

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
    this.agregaMateriales();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregaMateriales(): void {
    const promise = this.api.selectMaterialsInventory().then()
    promise.then((materiales) => {
      //console.log(JSON.stringify(data));
      for (var material of materiales) {

        // this.datos.push({
        //   codigo: material['Codigo'], categoria: material['Categoria'],
        //   descripcion: material['Descripcion'], cantidad: material['Cantidad'],
        //   precio: material['PrecioVenta'], fecharegistro: material['FechaRegistro']
        // });
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
