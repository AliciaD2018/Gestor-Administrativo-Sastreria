import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupSeleccionarClienteComponent } from '../popupSeleccionarCliente/popupSeleccionarCliente.component';
import { Abonos } from 'src/app/models/abono.interface';
import { PopupRegistrarClienteComponent } from '../popupRegistrarCliente/popupRegistrarCliente.component';
import { PopupAbonarComponent } from '../popupAbonar/popupAbonar.component';
import { CustomerI } from 'src/app/models/customer.interface';
import { Prendas } from '../../models/prendas.interface';
import { PopupRegistrarPrendasComponent } from '../popupRegistrarPrendas/popupRegistrarPrendas.component';
import { MaterialI } from 'src/app/models/material.interface';
import { PopupRegistrarMaterialComponent } from '../popupRegistrarMaterial/popupRegistrarMaterial.component';

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
      this.idNuevaOrden = id['SiguienteOrden']; // El nombre 'SiguienteOrden' se define en el procedimiento almacenado de la BD
      (<HTMLLabelElement>document.getElementById("numeroId")).innerText = this.idNuevaOrden;
    });
  }

  //-------------------------------------------------------------//
  //------              POPUP Seleccionar Cliente          ------//
  //-------------------------------------------------------------//

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

  //------------------------------------------------------------//
  //-------    DESPLIEGUE  POPUP  REGISTRAR CLIENTE     --------//
  //------------------------------------------------------------//

  openDialogAddCustomer(): void {
    /**
     * Se usa temporalmente el atributo Id de 'cliente' al instanciar
     * al PopupRegistrarClienteComponent para indicar el origen de la
     * instanciación
     * 0 = instanciación desde clientes.component.ts
     * 1 = instanciación desde crearOrden.component.ts
     */
    let cliente: CustomerI = {Id: '1', Cedula: '', NombreCompleto: '',
                              Email: '',Direccion: '', Observaciones: '',
                              Telefono1: '', TipoTelefono1: '', NotasTelefono1: '',
                              Telefono2: '', TipoTelefono2: '', NotasTelefono2:''};

    const dialogRef = this.dialog.open(PopupRegistrarClienteComponent, {
      width: '900px',
      data: cliente,
    });

    dialogRef.afterClosed().subscribe(customer => {
      console.log('The dialog was closed');
    });
  } // openDialogAddCustomer

  //------------------------------------------------------------//
  //-------       DESPLIEGUE  POPUP ABONAR              --------//
  //------------------------------------------------------------//

  openDialogAbonar(): void {
    let abonar: Abonos;

    const dialogRef = this.dialog.open(PopupAbonarComponent, {
      width: '900px',
      data: abonar,
    });

    dialogRef.afterClosed().subscribe(customer => {
      console.log('The dialog was closed');
    });
  } // openDialogCustomerDatails


  //------------------------------------------------------------//
  //-------      DESPLIEGUE  POPUP PRENDAS              --------//
  //------------------------------------------------------------//

  openDialogPrendas(): void {
    let prenda: Prendas;

    const dialogRef = this.dialog.open(PopupRegistrarPrendasComponent, {
      width: '900px',
      data: prenda,
    });

    dialogRef.afterClosed().subscribe(customer => {
      console.log('The dialog was closed');
    });
  } // openDialogCustomerDatails



//------------------------------------------------------------//
  //-------            REGISTRAR MATERIAL               --------//
  //------------------------------------------------------------//

  openDialogMaterial(): void {
    let material: MaterialI = {IdMaterial: '', Codigo: '',IdCategoria: '', Categoria: '',
                               Descripcion: '',Cantidad: '', IdUnidad: '', UnidadMedida: '',
                               PrecioCompra: '', PrecioVenta: '', FechaRegistro: ''};

    const dialogRef = this.dialog.open(PopupRegistrarMaterialComponent, {
      width: '730px',
      data: material,
    });

    dialogRef.afterClosed().subscribe(material => {
      console.log('The dialog was closed');
      window.location.reload();
    });
  } // openDialogAddMaterial

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
