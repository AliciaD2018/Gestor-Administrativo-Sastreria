import { Component, ViewChild, Inject } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api/api.service';
import { PopupEnviarEmailComponent } from '../popupEnviarEmail/popupEnviarEmail.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupVerDetallesClienteComponent } from '../popupVerDetallesCliente/popupVerDetallesCliente.component';
import { CustomerI } from 'src/app/models/customer.interface';
import { PopupModificarClienteComponent } from '../popupModificarCliente/popupModificarCliente.component';
import { PopupRegistrarClienteComponent } from '../popupRegistrarCliente/popupRegistrarCliente.component';
import { AdvertenciaI } from 'src/app/models/advertencia.interface';
import { PopupAdvertenciaComponent } from '../popupAdvertencia/popupAdvertencia.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})

export class ClientesComponent {

  constructor(
    // public dialogRef: MatDialogRef<PopupVerDetallesClienteComponent>,
    private api: ApiService,
    public dialog: MatDialog) { }

  columnas = ['cedula', 'nombre', 'telefono1', 'telefono2', 'email', 'direccion', 'opciones'];
  clickedRows = new Set<Customers>();
  clientes: CustomerI[] = [];
  dataSource: any;

  @ViewChild(MatTable) tabla1!: MatTable<Customers>;

  ngOnInit() {
    this.agregarClientes();
  }

  borrarFila(j: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.clientes.splice(j, 1);
      this.tabla1.renderRows();
      localStorage.setItem("clientes", JSON.stringify(this.clientes));
    }
  }

  pasarDatosCliente(j: number) {
    localStorage.setItem('cliente', JSON.stringify(this.clientes[j]));
  }

  //-------Filtro de busqueda
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregarClientes(): void {
    const promise = this.api.selectAllCustomers().then()
    promise.then((customers) => {
      // console.log("data: ",JSON.stringify(data));
      for (var customer of customers) {

        this.clientes.push({
          Id: customer['Id'], Cedula: customer['Cedula'], NombreCompleto: customer['NombreCompleto'],
          Telefono1: customer['Telefono1'], TipoTelefono1: customer['TipoTelefono1'], NotasTelefono1: customer['NotasTelefono1'],
          Telefono2: customer['Telefono2'], TipoTelefono2: customer['TipoTelefono2'], NotasTelefono2: customer['NotasTelefono2'],
          Email: customer['Email'], Direccion: customer['Direccion'], Observaciones: customer['Observaciones']
        });
        // console.log("Cliente:", customer);
      }

      //Se realiza la carga en la tabla general html del inventario.
      this.dataSource = new MatTableDataSource(this.clientes);

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

  //------------------------------------------------------------//
  //-------             CORREO                          --------//
  //------------------------------------------------------------//

  openDialogEmail(j: number): void {
    let nombre = this.clientes[j]['NombreCompleto'];
    let emailAddress = this.clientes[j]['Email'];

    const dialogRef = this.dialog.open(PopupEnviarEmailComponent, {
      width: '600px',
      data: { Nombre: nombre, Email: emailAddress, Asunto: '', Mensaje: '',
              Firma: '\n\nSastrería Sara Lehr\nTel.: 6141-7996'},
    });

    dialogRef.afterClosed().subscribe(correo => {
      console.log('The dialog was closed');
      this.api.sendEmail(correo);
    });
  } // openDialogEmail

  //------------------------------------------------------------//
  //-------             DETALLES CLIENTE                --------//
  //------------------------------------------------------------//

  openDialogCustomerDatails(j: number): void {
    let cliente: CustomerI = this.clientes[j];

    const dialogRef = this.dialog.open(PopupVerDetallesClienteComponent, {
      width: '900px',
      data: cliente,
    });

    dialogRef.afterClosed().subscribe(customer => {
      console.log('The dialog was closed');
    });
  } // openDialogCustomerDatails

  //------------------------------------------------------------//
  //-------              EDITAR CLIENTE                 --------//
  //------------------------------------------------------------//

  openDialogEditCustomer(j: number): void {
    let cliente: CustomerI = this.clientes[j];

    const dialogRef = this.dialog.open(PopupModificarClienteComponent, {
      width: '900px',
      data: cliente,
    });

    if (cliente['TipoTelefono1'] != undefined) {
      const $select2 = (<HTMLSelectElement>document.getElementById("tiposTelefono1"));
      $select2.options[$select2.selectedIndex].innerText = cliente['TipoTelefono1'];
    }
    if (cliente['TipoTelefono2'] != undefined) {
      const $select2 = (<HTMLSelectElement>document.getElementById("tiposTelefono2"));
      $select2.options[$select2.selectedIndex].innerText = cliente['TipoTelefono2'];
    }

    dialogRef.afterClosed().subscribe(customer => {
      console.log('The dialog was closed');
      window.location.reload();
    });
  } // openDialogEditCustomer

  //------------------------------------------------------------//
  //-------            REGISTRAR CLIENTE                --------//
  //------------------------------------------------------------//

  openDialogAddCustomer(): void {
    let cliente: CustomerI;
    cliente = {Id: '', Cedula: '', NombreCompleto: '',
               Email: '',Direccion: '', Observaciones: '',
               Telefono1: '', TipoTelefono1: '', NotasTelefono1: '',
               Telefono2: '', TipoTelefono2: '', NotasTelefono2:''};

    const dialogRef = this.dialog.open(PopupRegistrarClienteComponent, {
      width: '900px',
      data: cliente,
    });

    dialogRef.afterClosed().subscribe(customer => {
      console.log('The dialog was closed');
      window.location.reload();
    });
  } // openDialogAddCustomer

  //------------------------------------------------------------//
  //-------             ELIMINAR CLIENTE                --------//
  //------------------------------------------------------------//

  openDialogDeleteCustomer(j: number): void {
    let cliente = this.clientes[j];
    let atributos: AdvertenciaI;
    atributos = {Pregunta: "¿Seguro que desea eliminar este cliente?", Dato: cliente.NombreCompleto, IdDato: cliente.Id, Orden: 0};

    const dialogRef = this.dialog.open(PopupAdvertenciaComponent, {
      width: '500px',
      data: atributos
    });

    dialogRef.afterClosed().subscribe(correo => {
      console.log('The dialog was closed');
      window.location.reload();
    });
  } // openDialogDeleteCustomer

} // ClientesComponent

export class Customers {
  constructor(
    public id: string,
    public cedula: string,
    public nombre: string,
    public telefono1: string,
    public tipoTelefono1: string,
    public notasTelefono1: string,
    public telefono2: string,
    public tipoTelefono2: string,
    public notasTelefono2: string,
    public email: string,
    public direccion: string,
    public observaciones: string) {
  }
}

