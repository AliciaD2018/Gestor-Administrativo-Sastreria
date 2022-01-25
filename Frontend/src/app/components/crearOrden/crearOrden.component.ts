import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupSeleccionarClienteComponent } from '../popupSeleccionarCliente/popupSeleccionarCliente.component';
import { AbonoI } from 'src/app/models/abono.interface';
import { PopupRegistrarClienteComponent } from '../popupRegistrarCliente/popupRegistrarCliente.component';
import { PopupAbonarComponent } from '../popupAbonar/popupAbonar.component';
import { CustomerI } from 'src/app/models/customer.interface';
import { PrendasI } from '../../models/prendas.interface';
import { PopupRegistrarPrendasComponent } from '../popupRegistrarPrendas/popupRegistrarPrendas.component';
import { MaterialI } from 'src/app/models/material.interface';
import { PopupRegistrarMaterialComponent } from '../popupRegistrarMaterial/popupRegistrarMaterial.component';
import { AdvertenciaI } from 'src/app/models/advertencia.interface';
import { PopupAdvertenciaComponent } from '../popupAdvertencia/popupAdvertencia.component';

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

  abonos: Array<AbonoI> = [];
  prendas: Array<PrendasI> = [];
  materiales: Array<MaterialI> = [];

  abono: AbonoI = {
    IdAbano: '', FechaAbono: '', IdOrden: '',
    MontoAbono: '0', TotalAbonado: '0', CostoTotal: '0',
    SaldoAnterior: '0', NuevoSaldo: '0', Anotaciones: ''
  };

  @ViewChild(MatTable) tabla1!: MatTable<PrendasI>;

  @ViewChild(MatTable) tabla2!: MatTable<AbonoI>;

  ngOnInit() {
    this.obtenerSiguienteId();
  }

  obtenerSiguienteId() {
    const promise = this.api.selectNextOrderId().then();
    promise.then((id) => {
      this.abono.IdOrden = id['SiguienteOrden']; // El nombre 'SiguienteOrden' se define en el procedimiento almacenado de la BD
      (<HTMLLabelElement>document.getElementById("numeroId")).innerText = this.abono.IdOrden;
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
    let cliente: CustomerI = {
      Id: '1', Cedula: '', NombreCompleto: '',
      Email: '', Direccion: '', Observaciones: '',
      Telefono1: '', TipoTelefono1: '', NotasTelefono1: '',
      Telefono2: '', TipoTelefono2: '', NotasTelefono2: ''
    };

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
    // Obtener balance desde la base de datos
    let balance = this.api.selectBalance(this.abono.IdOrden);

    balance.then((datos) => {
      this.abono.TotalAbonado = datos['TotalAbonado']; // El nombre 'TotalAbonado' se define en el procedimiento almacenado de la BD
      this.abono.CostoTotal = datos['CostoTotal']; // El nombre 'MontoAbonado' se define en el procedimiento almacenado de la BD
      this.abono.SaldoAnterior = (parseInt(this.abono.CostoTotal) - parseInt(this.abono.TotalAbonado)).toString();
    });

    // Sí la orden tiene saldo se muestra la venta de abono nuevo
    if (parseInt(this.abono.SaldoAnterior) > 0) {
      const dialogRef = this.dialog.open(PopupAbonarComponent, {
        width: '900px',
        data: this.abono,
      });

      dialogRef.afterClosed().subscribe(resultado => {
        console.log('The dialog was closed');
        if (this.abono.NuevoSaldo == 'Abono supera monto adeudado!') {
          this.abono.NuevoSaldo = '0';
          this.abono.MontoAbono = '0';
        }
      });
    } else { // Sí la orden no tiene saldos, se muestra un mensaje
      let atributos: AdvertenciaI;
      atributos = { Titulo: 'Información', Pregunta: "¡Esta orden no cuenta con saldos pendientes!",
                    Dato: 'Orden #' + this.abono.IdOrden, IdDato: '0', Orden: 6, Boton1: 'OK', Boton2: '',
                    Icono0: '', Icono1: '', Icono2: '' };

      const dialogRef = this.dialog.open(PopupAdvertenciaComponent, {
        width: '500px',
        data: atributos
      });

      dialogRef.afterClosed().subscribe(correo => {
        console.log('The dialog was closed');
        window.location.reload();
      });
    }

  } // openDialogCustomerDatails


  //------------------------------------------------------------//
  //-------      DESPLIEGUE  POPUP PRENDAS              --------//
  //------------------------------------------------------------//

  openDialogPrendas(): void {
    let prenda: PrendasI;

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
    let material: MaterialI = {
      IdMaterial: '', Codigo: '', IdCategoria: '', Categoria: '',
      Descripcion: '', Cantidad: '', IdUnidad: '', UnidadMedida: '',
      PrecioCompra: '', PrecioVenta: '', FechaRegistro: ''
    };

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