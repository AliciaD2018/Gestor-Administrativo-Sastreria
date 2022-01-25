import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerI } from 'src/app/models/customer.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupSeleccionarCliente',
  templateUrl: './popupSeleccionarCliente.component.html',
  styleUrls: ['./popupSeleccionarCliente.component.css']
})

export class PopupSeleccionarClienteComponent implements OnInit {

  displayedColumns: string[] = ['cedula', 'cliente', 'opciones'];
  checked=false;
  clientes: CustomerI[] = [];
  cliente: CustomerI;
  dataSource: any;
    
  constructor(
    public dialogRef: MatDialogRef<PopupSeleccionarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerI,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.agregarClientes();
  }
  
  onCancelClick(): void {
    this.dialogRef.close();
  }

  seleccionarCliente(j: number){
    this.cliente = this.clientes[j];
    this.insertarDatosCliente(this.cliente);
    this.dialogRef.close();
  };

  /**
   * Agregar los datos del cliente seleccionado a la interface
   */
  insertarDatosCliente(clienteSeleccionado: CustomerI): void {
    this.data.Id = clienteSeleccionado.Id;

    if (clienteSeleccionado['Cedula'] != undefined) {
      (<HTMLInputElement>document.getElementById('cedula')).value = clienteSeleccionado['Cedula'];
    }
    if (clienteSeleccionado['NombreCompleto'] != undefined) {
      (<HTMLInputElement>document.getElementById('nombre')).value = clienteSeleccionado['NombreCompleto'];
    }
    if (clienteSeleccionado['Telefono1'] != undefined) {
      (<HTMLInputElement>document.getElementById('telefono1')).value = clienteSeleccionado['Telefono1'];
    }
    if (clienteSeleccionado['TipoTelefono1'] != undefined) {
      (<HTMLInputElement>document.getElementById("tipoTelefono1")).value = clienteSeleccionado['TipoTelefono1'];
    }
    if (clienteSeleccionado['NotasTelefono1'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('notasTelefono1')).value = clienteSeleccionado['NotasTelefono1'];
    }
    if (clienteSeleccionado['Telefono2'] != undefined) {
      (<HTMLInputElement>document.getElementById('telefono2')).value = clienteSeleccionado['Telefono2'];
    }
    if (clienteSeleccionado['TipoTelefono2'] != undefined) {
      (<HTMLInputElement>document.getElementById("tipoTelefono2")).value = clienteSeleccionado['TipoTelefono2'];
    }
    if (clienteSeleccionado['NotasTelefono2'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('notasTelefono2')).value = clienteSeleccionado['NotasTelefono2'];
    }
    if (clienteSeleccionado['Email'] != undefined) {
      (<HTMLInputElement>document.getElementById('email')).value = clienteSeleccionado['Email'];
    }
    if (clienteSeleccionado['Direccion'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('direccion')).value = clienteSeleccionado['Direccion'];
    }
    if (clienteSeleccionado['Observaciones'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('observaciones')).value = clienteSeleccionado['Observaciones'];
    }
  } // insertarDatosCliente

  /**
   * Obtiene todos los clientes desde la BD para mostrarlos en la lista
   */
  agregarClientes(): void {
    const promise = this.api.selectAllCustomers().then()

    promise.then((customers) => {
      for (var customer of customers) {

        this.clientes.push({
          Id: customer['Id'], Cedula: customer['Cedula'], NombreCompleto: customer['NombreCompleto'],
          Telefono1: customer['Telefono1'], TipoTelefono1: customer['TipoTelefono1'], NotasTelefono1: customer['NotasTelefono1'],
          Telefono2: customer['Telefono2'], TipoTelefono2: customer['TipoTelefono2'], NotasTelefono2: customer['NotasTelefono2'],
          Email: customer['Email'], Direccion: customer['Direccion'], Observaciones: customer['Observaciones']
        });
        // console.log("-------------->", customer);
      }
      //Se realiza la carga en la tabla general html del inventario.
      this.dataSource = this.clientes;
      this.dataSource = new MatTableDataSource(this.clientes);

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

}


