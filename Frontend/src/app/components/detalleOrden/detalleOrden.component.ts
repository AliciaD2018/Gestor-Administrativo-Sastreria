import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalleOrden',
  templateUrl: './detalleOrden.component.html',
  styleUrls: ['./detalleOrden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  constructor() { }

  columnas: string[] = ['numeroOrden', 'tipo', 'decTrabajo', 'fentrega', 'monto'];

  columnas2: string[] = ['fecha', 'salAnterior', 'abono', 'salNuevo', 'montoP'];

  datos: Articulo[] = [new Articulo('O-01', 'temp', 'costura de vestido','15/01/2022','1000'),
  new Articulo('O-01', 'temp', 'costura de vestido','15/01/2022','1000'),
  new Articulo('O-01', 'temp', 'costura de vestido','15/01/2022','1000'),
  new Articulo('O-01', 'temp', 'costura de vestido','15/01/2022','1000'),
  new Articulo('O-01', 'temp', 'costura de vestido','15/01/2022','1000'),
  new Articulo('O-01', 'temp', 'costura de vestido','15/01/2022','1000'),
  new Articulo('O-01', 'temp', 'costura de vestido','15/01/2022','1000'),
  new Articulo('O-01', 'temp', 'costura de vestido','15/01/2022','1000'),

  ];

  articuloselect: Articulo = new Articulo('','','','','');

  
  datos2: Historico[] = [new Historico('13/01/2022', '10000', '2500','7500','2500'),
  new Historico('13/01/2022', '10000', '2500','7500','2500'),
  new Historico('13/01/2022', '10000', '2500','7500','2500'),
  new Historico('13/01/2022', '10000', '2500','7500','2500'),
  new Historico('13/01/2022', '10000', '2500','7500','2500'),
  new Historico('13/01/2022', '10000', '2500','7500','2500'),


  ];
  historicoselect: Historico = new Historico('','','','','');

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;
  
  @ViewChild(MatTable) tabla2!: MatTable<Historico>;

  ngOnInit() {
 
  }

  agregar(){
    this.datos.push(new Articulo(this.articuloselect.numeroOrden, this.articuloselect.tipo, this.articuloselect.decTrabajo,
    this.articuloselect.fentrega,this.articuloselect.monto));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo('','','','','');
  }

  agregar2(){
    this.datos2.push(new Historico(this.historicoselect.fecha, this.historicoselect.salAnterior, this.historicoselect.abono,
    this.historicoselect.salNuevo,this.historicoselect.montoP));
    this.tabla2.renderRows();
    this.historicoselect = new Historico('','','','','');
  }
  
}


export class Articulo {
  constructor(
    public numeroOrden: string,
    public tipo: string,
    public decTrabajo: string,
    public fentrega: string,
    public monto: string) {
  }
}

export class Historico {
  constructor(
    public fecha: string,
    public salAnterior: string,
    public abono: string,
    public salNuevo: string,
    public montoP: string) {
  }
}
