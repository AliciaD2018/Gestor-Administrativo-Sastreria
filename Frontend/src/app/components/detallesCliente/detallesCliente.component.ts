import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detallesCliente',
  templateUrl: './detallesCliente.component.html',
  styleUrls: ['./detallesCliente.component.css']
})
export class DetallesClienteComponent implements OnInit {

  private datosCliente: any;

  constructor(private api: ApiService) {
  }

  ngOnInit() {

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
      (<HTMLTextAreaElement>document.getElementById('tipoTelefono1')).value = this.datosCliente['tipoTelefono1'];
    }
    if (this.datosCliente['notasTelefono1'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('notasTelefono1')).value = this.datosCliente['notasTelefono1'];
    }
    if (this.datosCliente['telefono2'] != undefined) {
      (<HTMLInputElement>document.getElementById('telefono2')).value = this.datosCliente['telefono2'];
    }
    if (this.datosCliente['tipoTelefono2'] != undefined) {
      (<HTMLTextAreaElement>document.getElementById('tipoTelefono2')).value = this.datosCliente['tipoTelefono2'];
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

    if (!localStorage.getItem('reload')) {
      localStorage['reload'] = true;
    }
  }

}
