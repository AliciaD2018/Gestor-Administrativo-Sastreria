import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupSeleccionarClienteComponent } from '../popupSeleccionarCliente/popupSeleccionarCliente.component';
import { CustomerI } from 'src/app/models/customer.interface';

@Component({
  selector: 'app-crearOrden',
  templateUrl: './crearOrden.component.html',
  styleUrls: ['./crearOrden.component.css']
})

export class CrearOrdenComponent implements OnInit {

  constructor(private api: ApiService,
              public dialog: MatDialog) { }

  idNuevaOrden;
  columnasAbonos: string[] = ['fecha', 'salAnterior', 'abono', 'salNuevo', 'montoP', 'opciones'];
  columnasPrendas: string[] = ['numeroOrden', 'tipo', 'decTrabajo', 'fentrega', 'monto', 'opciones'];
  columnasMateriales: string[] = ['codigo', 'categoria', 'descripcion', 'cantidad', 'unidadmedida', 'precio', 'fecharegistro', 'opciones'];

  datosPrendas: Prenda[] = [
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
    new Prenda('O-01', 'temp', 'costura de vestido', '15/01/2022', '1000'),
  ];

  datosAbonos: Abono[] = [
    new Abono('13/01/2022', '10000', '2500', '7500', '2500'),
    new Abono('13/01/2022', '10000', '2500', '7500', '2500'),
    new Abono('13/01/2022', '10000', '2500', '7500', '2500'),
    new Abono('13/01/2022', '10000', '2500', '7500', '2500'),
    new Abono('13/01/2022', '10000', '2500', '7500', '2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
    // new Abono('13/01/2022', '10000', '2500','7500','2500'),
  ];

  datosMateriales: Articulo[] = [
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '1', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '2', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '3', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '4', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '5', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '6', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '7', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '8', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '9', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '10', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '11', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '12', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '13', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '14', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '15', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '16', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '17', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '18', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '19', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '20', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '21', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '22', 'm', '26-11-2021', '1100'),
    new Articulo('TEL008', 'TELAS', 'TELA TROPICAL AZUL', '23', 'm', '26-11-2021', '1100')
  ];

  @ViewChild(MatTable) tabla1!: MatTable<Prenda>;

  @ViewChild(MatTable) tabla2!: MatTable<Abono>;

  ngOnInit() {
    this.obtenerSiguienteId();
  }

  obtenerSiguienteId() {
    const promise = this.api.selectNextOrderId().then()
    promise.then((id) => {
      this.idNuevaOrden = id['SiguienteOrden'];
      (<HTMLLabelElement>document.getElementById("numeroId")).innerText = this.idNuevaOrden;
    });
  }

  //-------------------------------------------------------------
  //------              POPUP Selecciona Cliente           ------
  //---------------------------------------------------------------

  openDialogSelectCustomer(): void {
    let clientes: CustomerI[] = [];

    const dialogRef = this.dialog.open(PopupSeleccionarClienteComponent, {
      width: '700px',
      data: clientes,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  
} // CrearOrdenComponent


export class Abono {
  constructor(
    public fecha: string,
    public salAnterior: string,
    public abono: string,
    public salNuevo: string,
    public montoP: string) {
  }
}

export class Prenda {
  constructor(
    public numeroOrden: string,
    public tipo: string,
    public decTrabajo: string,
    public fentrega: string,
    public monto: string) {
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
