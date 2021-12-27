import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  constructor() { }

columnas: string[] = ['numeroOrden', 'cliente', 'costoTotal', 'saldo', 'fechaEntrega', 'cantidadPrendas', 'borrar'];

public datos: Orders[] = [
  new Orders('1', 'Alicia Diaz', '7000', '0', '27/12/2021', '2'),
  new Orders('2', 'Maritza Rivas', '4200', '200', '30/12/2021', '1'),
  new Orders('2', 'Hector Araya', '23000', '11500', '31/12/2021', '1'),
];

orderselect: Orders = new Orders('', "", '', '', '', '');

@ViewChild(MatTable) tabla1!: MatTable<Orders>;



borrarFila(cod: number) {
  if (confirm("Realmente quiere borrarlo?")) {
    this.datos.splice(cod, 1);
    this.tabla1.renderRows();
  }
}

//-------Filtro de busqueda
dataSource: any;
ngOnInit() {
  this.dataSource = new MatTableDataSource(this.datos);
}

filtrar(event: Event) {
  const filtro = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filtro.trim().toLowerCase();
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