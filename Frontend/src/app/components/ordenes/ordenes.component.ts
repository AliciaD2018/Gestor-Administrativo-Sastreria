import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { OrdenI } from 'src/app/models/orden.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  constructor(private api: ApiService) {
  }

  columnas: string[] = ['numeroOrden', 'cliente', 'costoTotal', 'saldo', 'fechaEntrega', 'cantidadPrendas', 'opciones'];

  ordenes: OrdenI[] = [];

  @ViewChild(MatTable) tabla1!: MatTable<OrdenI>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.ordenes.splice(cod, 1);
      this.tabla1.renderRows();
      localStorage.setItem("ordenes", JSON.stringify(this.ordenes));
    }
  }

  //-------Filtro de busqueda
  dataSource: any;
  ngOnInit() {
    this.agregarOrdenes();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregarOrdenes(): void {
    const promise = this.api.selectAllOrders().then()
    promise.then((orders) => {
      // console.log(JSON.stringify(data));
      for (var order of orders) {
        let saldo;
        let fecha;
        let cantidad;

        if (order['Saldo'] == null) {
          saldo = 0;
        } else {
          saldo = order['Saldo'];
        }

        if (order['FechaEntrega'] == null) {
          fecha = "N/A";
        } else {
          fecha = order['FechaEntrega'];
        }
        
        if (order['Cantidad'] == null) {
          cantidad = 0;
        } else {
          cantidad = order['Cantidad'];
        }

        this.ordenes.push({
          IdOrden: order['IdOrden'], IdCliente: order['IdCliente'], NombreCliente: order['NombreCompleto'],
          FechaInicio: fecha, IdEstadoOrden: order['IdEstadoOrden'], Comentarios: order['Comentarios'],
          TotalPrendas: cantidad, PrendasEntregadas: order['PrendasEntregadas'], CostoTotal: order['CostoTotal']
        });
        // console.log("-------------->",order);
      }

      //Se realiza la carga en la tabla general html del inventario.
      const articulos = JSON.stringify(this.ordenes);
      this.ordenes = JSON.parse(articulos);
      this.dataSource = new MatTableDataSource(this.ordenes);

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }
}