import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupSeleccionarClienteComponent } from '../popupSeleccionarCliente/popupSeleccionarCliente.component';
import { AbonoI } from 'src/app/models/abono.interface';
import { PopupRegistrarClienteComponent } from '../popupRegistrarCliente/popupRegistrarCliente.component';
import { PopupAbonarComponent } from '../popupAbonar/popupAbonar.component';
import { CustomerI } from 'src/app/models/customer.interface';
import { PrendaI } from '../../models/prenda.interface';
import { PopupRegistrarPrendasComponent } from '../popupRegistrarPrendas/popupRegistrarPrendas.component';
import { MaterialI } from 'src/app/models/material.interface';
import { PopupRegistrarMaterialComponent } from '../popupRegistrarMaterial/popupRegistrarMaterial.component';
import { AdvertenciaI } from 'src/app/models/advertencia.interface';
import { PopupAdvertenciaComponent } from '../popupAdvertencia/popupAdvertencia.component';
import { OrdenI } from 'src/app/models/orden.interface';

@Component({
  selector: 'app-crearOrden',
  templateUrl: './crearOrden.component.html',
  styleUrls: ['./crearOrden.component.css']
})

export class CrearOrdenComponent implements OnInit {

  constructor(private api: ApiService,
    public dialog: MatDialog) { }

  columnasAbonos: string[] = ['fecha', 'salAnterior', 'abono', 'salNuevo', 'montoP', 'opciones'];
  columnasPrendas: string[] = ['numeroOrden', 'tipo', 'decTrabajo', 'fentrega', 'monto', 'opciones'];
  columnasMateriales: string[] = ['codigo', 'categoria', 'descripcion', 'cantidad', 'unidadmedida',
                                  'precio', 'fecharegistro', 'opciones'];

  @ViewChild(MatTable) tabla1!: MatTable<PrendaI>;

  @ViewChild(MatTable) tabla2!: MatTable<AbonoI>;

  ngOnInit() {
    this.obtenerSiguienteId();
    this.obtenerFecha();
  }

  idNuevaOrden;
  abonos: Array<AbonoI> = [];
  prendas: Array<PrendaI> = [];
  materiales: Array<MaterialI> = [];
  orden: OrdenI = {IdOrden: '', IdCliente: '', NombreCliente: '', FechaInicio: '',
                   IdEstadoOrden: '1', Comentarios: '', TotalPrendas: '0', PrendasEntregadas: '0',
                   CostoTotal: '0'};

  obtenerSiguienteId() {
    const promise = this.api.selectNextOrderId().then();
    promise.then((id) => {
      this.idNuevaOrden = id['SiguienteOrden']; // El nombre 'SiguienteOrden' se define en el procedimiento almacenado de la BD
      (<HTMLLabelElement>document.getElementById("numeroId")).innerText = this.idNuevaOrden;
      this.orden.IdOrden = this.idNuevaOrden;
    });
  }

  obtenerFecha(){
    let fechaHoy = new Date().toISOString().substring(0,10);
    let year = fechaHoy.substring(0,4);
    let mes = fechaHoy.substring(5,7);
    let dia = fechaHoy.substring(8);
    let fecha = dia + '/' + mes + '/' + year;
    this.orden.FechaInicio = fecha;
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

    dialogRef.afterClosed().subscribe(cliente => {
      console.log('The dialog was closed');
      console.log("Id cliente seleccionado: ", cliente.Id);
      this.orden.IdCliente = cliente.Id;
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
    let abono: AbonoI = {
      IdAbano: '', FechaAbono: '', IdOrden: '',
      MontoAbono: '0', TotalAbonado: '0', CostoTotal: '0',
      SaldoAnterior: '0', NuevoSaldo: '0', Anotaciones: ''
    };

    abono.IdOrden = this.idNuevaOrden;

    // Obtener balance desde la base de datos
    let balance = this.api.selectBalance(abono.IdOrden);

    balance.then((datos) => {
      abono.TotalAbonado = datos['TotalAbonado']; // El nombre 'TotalAbonado' se define en el procedimiento almacenado de la BD
      abono.CostoTotal = datos['CostoTotal']; // El nombre 'MontoAbonado' se define en el procedimiento almacenado de la BD
      abono.SaldoAnterior = (parseInt(abono.CostoTotal) - parseInt(abono.TotalAbonado)).toString();
    });

    // Sí la orden tiene saldo se muestra la venta de abono nuevo
    if (parseInt(abono.SaldoAnterior) > 0 || this.prendas.length > 0) {
      const dialogRef = this.dialog.open(PopupAbonarComponent, {
        width: '900px',
        data: abono,
      });

      dialogRef.afterClosed().subscribe(resultado => {
        console.log('The dialog was closed');
        if (abono.NuevoSaldo == 'Abono supera monto adeudado!') {
          abono.NuevoSaldo = '0';
          abono.MontoAbono = '0';
        }
      });
    } else { // Sí la orden no tiene saldos, se muestra un mensaje
      let atributos: AdvertenciaI;
      atributos = { Titulo: 'Información', Pregunta: "¡Esta orden no cuenta con saldos pendientes!",
                    Dato: 'Orden #' + abono.IdOrden, IdDato: '0', Orden: 6, Boton1: 'OK', Boton2: '',
                    Icono0: '', Icono1: '', Icono2: '' };

      const dialogRef = this.dialog.open(PopupAdvertenciaComponent, {
        width: '500px',
        data: atributos
      });

      dialogRef.afterClosed().subscribe(abonoNuevo => {
        console.log('The dialog was closed');
        this.abonos.push(abonoNuevo);
      });
    }

  } // openDialogCustomerDatails

  //------------------------------------------------------------//
  //-------   DESPLIEGUE POPUP AGREGAR PRENDAS          --------//
  //------------------------------------------------------------//

  openDialogAgregarPrenda(): void {
    let prenda: PrendaI = {IdPrenda: '', IdOrden: '', NumeroPrenda: '', IdTipoPrenda: '',
                     TipoPrenda: '', Precio: '0', Cantidad: '1',MontoTotal: '0', FechaEncargo: '',
                     FechaEntrega: '', Descripciones: '', IdEstado: '1', EstadoPrenda: 'PENDIENTE'};

    prenda.IdOrden = this.idNuevaOrden;
    
    let promise = this.api.selectNextClothingNumber(this.idNuevaOrden);

    promise.then((numero) => {
      prenda.NumeroPrenda = numero['SiguienteNumero']; // El nombre 'SiguienteNumero' se define en el procedimiento almacenado de la BD
    })

    const dialogRef = this.dialog.open(PopupRegistrarPrendasComponent, {
      width: '600px',
      data: prenda,
    });

    dialogRef.afterClosed().subscribe(prenda => {
      console.log('The dialog was closed');
      this.prendas.push(prenda);
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

  insertarOrden(){
    // Se inserta la orden nueva
    this.api.insertOrder(this.orden);

    // Se insertan las prendas
    for (var item of this.prendas  ) {
      console.log(item);
    }

    // Se insertan los abonos
    for (var elem of this.abonos) {
      console.log(elem);
    }
  }

} // CrearOrdenComponent