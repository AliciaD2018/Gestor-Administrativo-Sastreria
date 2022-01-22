import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerI } from 'src/app/models/customer.interface';
import { CustomerUII } from 'src/app/models/customerUI.interface';
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
    @Inject(MAT_DIALOG_DATA) public data: {Cedula: string, NombreCompleto: string},
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

  insertarDatosCliente(clienteSeleccionado: CustomerI): void {
    let datosCliente = clienteSeleccionado;

    // Agregar los datos del cliente seleccionado a la interface
    if (datosCliente['Cedula'] != undefined) {
      (<HTMLInputElement>document.getElementById('cedula')).value = datosCliente['Cedula'];
    }
    if (datosCliente['NombreCompleto'] != undefined) {
      (<HTMLInputElement>document.getElementById('nombre')).value = datosCliente['NombreCompleto'];
    }
    if (datosCliente['Telefono1'] != undefined) {
      (<HTMLInputElement>document.getElementById('telefono1')).value = datosCliente['Telefono1'];
    }
    if (datosCliente['TipoTelefono1'] != undefined) {
      (<HTMLInputElement>document.getElementById("tipoTelefono1")).value = datosCliente['TipoTelefono1'];
    }
    if (datosCliente['NotasTelefono1'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('notasTelefono1')).value = datosCliente['NotasTelefono1'];
    }
    if (datosCliente['Telefono2'] != undefined) {
      (<HTMLInputElement>document.getElementById('telefono2')).value = datosCliente['Telefono2'];
    }
    if (datosCliente['TipoTelefono2'] != undefined) {
      (<HTMLInputElement>document.getElementById("tipoTelefono2")).value = datosCliente['TipoTelefono2'];
    }
    if (datosCliente['NotasTelefono2'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('notasTelefono2')).value = datosCliente['NotasTelefono2'];
    }
    if (datosCliente['Email'] != undefined) {
      (<HTMLInputElement>document.getElementById('email')).value = datosCliente['Email'];
    }
    if (datosCliente['Direccion'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('direccion')).value = datosCliente['Direccion'];
    }
    if (datosCliente['Observaciones'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('observaciones')).value = datosCliente['Observaciones'];
    }
  } // insertarDatosCliente

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


