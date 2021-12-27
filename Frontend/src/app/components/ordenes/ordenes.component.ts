import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RegistrarOrdenComponent } from '../registrarOrden/registrarOrden.component';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

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

    if (localStorage.getItem("isFirstTime") === "true" || localStorage.getItem("isFirstTime") === null) {
      this.datos = [
        new Orders('1', 'Alicia Diaz', '7000', '0', '27/12/2021', '2'),
        new Orders('2', 'Maritza Rivas', '4200', '200', '30/12/2021', '1'),
        new Orders('3', 'Hector Araya', '23000', '11500', '31/12/2021', '1'),
      ]
      localStorage.setItem("ordenes", JSON.stringify(this.datos));
      localStorage.setItem("isFirstTime", "false");
    }
    // extrae los datos del local storage
    const c = localStorage.getItem("ordenes");
    if (c !== null) {
      this.datos = JSON.parse(c);
    }

    this.dataSource = new MatTableDataSource(this.datos);

  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  nuevo(nombre) {

    var valor = new Orders('malisim', nombre, 'd1', 'd1', 'd1', 'd1')
    console.log(valor);
    this.datos.push(valor);

    this.tabla1.renderRows();
    this.orderselect = new Orders('', '', '', '', '', '');

    console.log(this.datos)
  }

  agregar(): void {
    console.log("entra")

    this.importa.guardarOrden();
    console.log("Prueba");
    console.log(this.importa.orden_nueva)

    this.tabla1.renderRows();
    this.orderselect = new Orders('', '', '', '', '', '');

    console.log(this.datos)
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