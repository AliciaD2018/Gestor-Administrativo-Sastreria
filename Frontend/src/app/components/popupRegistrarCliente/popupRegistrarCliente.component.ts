import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI } from 'src/app/models/customer.interface';
import { ApiService } from 'src/app/services/api/api.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popupRegistrarCliente',
  templateUrl: './popupRegistrarCliente.component.html',
  styleUrls: ['./popupRegistrarCliente.component.css']
})
export class PopupRegistrarClienteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupRegistrarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerI,
    private api: ApiService
  ) { }

  origen: string;

  ngOnInit() {
    this.agregarTiposTelefonos();
    /**
     * Se usa temporalmente el atributo Id de 'cliente' al instanciar
     * al PopupRegistrarClienteComponent para indicar el origen de la
     * instanciación
     * 0 = instanciación desde clientes.component.ts
     * 1 = instanciación desde crearOrden.component.ts
     */
    this.origen = this.data.Id;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  /**
   * Agrega los tipos de teléfonos en el select de la vista
   * */
  agregarTiposTelefonos(): void {
    const promise = this.api.selectPhonesTypes().then()
    promise.then((types) => {
      // Se crea variable de referencia al elemento select
      const $select1 = document.getElementById("tiposTelefono1");
      const $select2 = document.getElementById("tiposTelefono2");
      for (var type of types) {
        // Se crea una option
        const opcion1 = document.createElement('option');
        const opcion2 = document.createElement('option');
        const valor = type['TipoTelefono'];
        opcion1.value = valor;
        opcion1.text = valor;
        opcion2.value = valor;
        opcion2.text = valor;
        $select1.appendChild(opcion1);
        $select2.appendChild(opcion2);
      }
    });
  } // agregarTiposTelefonos

  /**
   * Inserta un nuevo cliente en la Base de Datos
   * */
  insertarCliente() {
    if (this.origen == '1') {
      // console.log("Mostrando datos...");
      this.insertarDatosCliente(this.data); 
    }
    
    // Validar si se incluyo el teléfono 1
    if (this.data.Telefono1 != '') {
      // Leer el tipo de teléfono del select
      const $select1 = (<HTMLSelectElement>document.getElementById("tiposTelefono1"));
      let tipotelefono1 = $select1.options[$select1.selectedIndex].innerText;
      this.data.TipoTelefono1 = tipotelefono1;
    } else {
      this.data.Telefono1 = '0'
    }

    // Validar si se incluyo el teléfono 2
    if (this.data.Telefono2 != '') {
      // Leer el tipo de teléfono del select
      const $select2 = (<HTMLSelectElement>document.getElementById("tiposTelefono2"));
      var tipotelefono2 = $select2.options[$select2.selectedIndex].innerText;
      this.data.TipoTelefono2 = tipotelefono2;  
    } else {
      this.data.Telefono2 = '0'
    }
    let siguienteId = this.api.selectNextCustomerId();
    siguienteId.then((id) =>{
      console.log("ID: ", id['SiguienteIdCliente']);
      this.data.Id = id['SiguienteIdCliente'];
    })
    
    this.api.insertCustomer(this.data);
  } // insertarCliente

  //------------------------------------------------------------//
  //-------      INSERTAR DATOS CLIENTE EN VISTA        --------//
  //------------------------------------------------------------//

  insertarDatosCliente(datosCliente: CustomerI): void {

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
  
} // PopupRegistrarClienteComponent
