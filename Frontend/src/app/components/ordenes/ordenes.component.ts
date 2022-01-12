import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api/api.service';
import { RegistrarOrdenComponent } from '../registrarOrden/registrarOrden.component';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  constructor(private api: ApiService) {
  }
  
  @ViewChild(RegistrarOrdenComponent) importa: RegistrarOrdenComponent;


  columnas: string[] = ['numeroOrden', 'cliente', 'costoTotal', 'saldo', 'fechaEntrega', 'cantidadPrendas', 'borrar'];

  public datos: Orders[] = [];

  orderselect: Orders = new Orders('', "", '', '', '', '');

  @ViewChild(MatTable) tabla1!: MatTable<Orders>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
      localStorage.setItem("ordenes", JSON.stringify(this.datos));
    }
  }

  //-------Filtro de busqueda
  dataSource: any;
  ngOnInit() {

  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  
  agregarOrden(): void {
    const promise = this.api.selectOrders().then()
    promise.then((data) => {
      console.log(JSON.stringify(data));
      for (var order of data) {

        this.datos.push({
          numeroOrden: order['NombreCompleto'], cliente: order['Telefono1'],
          costoTotal: order['Telefono2'], saldo: order['Cedula'],
          fechaEntrega: order['Email'], cantidadPrendas: order['Direccion']
        });
        console.log("-------------->",order);
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

export class Orders {
  constructor(
    public numeroOrden: string,
    public cliente: string,
    public costoTotal: string,
    public saldo: string,
    public fechaEntrega: string,
    public cantidadPrendas: string) {
  }
}