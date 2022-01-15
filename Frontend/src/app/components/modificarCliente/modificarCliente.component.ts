import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service'

@Component({
  selector: 'app-modificarCliente',
  templateUrl: './modificarCliente.component.html',
  styleUrls: ['./modificarCliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  private datosCliente: any;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.agregarTiposTelefonos();

    // Carga los datos del cliente en el formulario
    this.datosCliente = JSON.parse(localStorage.getItem('cliente'));

    if (this.datosCliente['cedula'] != undefined) {
      (<HTMLInputElement>document.getElementById('cedula')).value = this.datosCliente['cedula'];
    }
    if (this.datosCliente['nombre'] != undefined) {
      (<HTMLInputElement>document.getElementById('nombre')).value = this.datosCliente['nombre'];
    }
    if (this.datosCliente['telefono1'] != undefined) {
      (<HTMLInputElement>document.getElementById('telefono1')).value = this.datosCliente['telefono1'];
    }
    if (this.datosCliente['tipoTelefono1'] != undefined) {
      const $select1 = (<HTMLSelectElement>document.getElementById("tiposTelefono1"));
      $select1.options[$select1.selectedIndex].innerText = this.datosCliente['tipoTelefono1'];
    }
    if (this.datosCliente['notasTelefono1'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('notasTelefono1')).value = this.datosCliente['notasTelefono1'];
    }
    if (this.datosCliente['telefono2'] != undefined) {
      (<HTMLInputElement>document.getElementById('telefono2')).value = this.datosCliente['telefono2'];
    }
    if (this.datosCliente['tipoTelefono2'] != undefined) {
      const $select2 = (<HTMLSelectElement>document.getElementById("tiposTelefono2"));
      $select2.options[$select2.selectedIndex].innerText = this.datosCliente['tipoTelefono2'];
    }
    if (this.datosCliente['notasTelefono2'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('notasTelefono2')).value = this.datosCliente['notasTelefono2'];
    }
    if (this.datosCliente['email'] != undefined) {
      (<HTMLInputElement>document.getElementById('email')).value = this.datosCliente['email'];
    }
    if (this.datosCliente['direccion'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('direccion')).value = this.datosCliente['direccion'];
    }
    if (this.datosCliente['observaciones'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('observacionesCliente')).value = this.datosCliente['observaciones'];
    }

  }

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
  }

  actualizarCliente() {
    // Obtiene los datos desde la vista
    const id = this.datosCliente['id'];
    const cedula = (<HTMLInputElement>document.getElementById("cedula")).value;
    const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    const observaciones = (<HTMLInputElement>document.getElementById("observacionesCliente")).value;
    const telefono1 = (<HTMLSelectElement>document.getElementById("telefono1")).value;

    const $select1 = (<HTMLSelectElement>document.getElementById("tiposTelefono1"));
    var tipotelefono1 = $select1.options[$select1.selectedIndex].innerText;
    if (tipotelefono1 == '') {
      tipotelefono1 = '0';
    }

    const notast1 = (<HTMLInputElement>document.getElementById("notasTelefono1")).value;
    const telefono2 = (<HTMLInputElement>document.getElementById("telefono2")).value;

    const $select2 = (<HTMLSelectElement>document.getElementById("tiposTelefono2"));
    var tipotelefono2 = $select2.options[$select2.selectedIndex].innerText;
    if (tipotelefono2 == '') {
      tipotelefono2 = '0';
    }

    const notast2 = (<HTMLInputElement>document.getElementById("notasTelefono2")).value;

    const cliente = {
      Id: id,
      Cedula: cedula,
      NombreCompleto: nombre,
      Email: email,
      Direccion: direccion,
      Observaciones: observaciones,
      Telefono1: telefono1,
      TipoTelefono1: tipotelefono1,
      NotasTelefono1: notast1,
      Telefono2: telefono2,
      TipoTelefono2: tipotelefono2,
      NotasTelefono2: notast2
    }

    // Comunica con el API por medio del service
    this.api.updateCustomer(cliente);
  }


}
