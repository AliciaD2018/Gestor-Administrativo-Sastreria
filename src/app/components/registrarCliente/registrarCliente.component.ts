import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Articulo, ClientesComponent } from '../clientes/clientes.component';
import { insertCustomers } from 'API/endpoints/insertCustomer';

@Component({
  selector: 'app-registrarCliente',
  templateUrl: './registrarCliente.component.html',
  styleUrls: ['./registrarCliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardarCliente() {

    const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    const t1 = (<HTMLInputElement>document.getElementById("telefono1")).value;
    const notast1 = (<HTMLInputElement>document.getElementById("notasTelefono1")).value;
    const t2 = (<HTMLInputElement>document.getElementById("telefono2")).value;
    const notast2 = (<HTMLInputElement>document.getElementById("notasTelefono2")).value;
    const cedula = (<HTMLInputElement>document.getElementById("cedula")).value;
    const mail = (<HTMLInputElement>document.getElementById("email")).value;
    const direc = (<HTMLInputElement>document.getElementById("direccion")).value;
    const obs = (<HTMLInputElement>document.getElementById("observacionesCliente")).value;

    const clientes = {
      cedula, nombre, t1, notast1, t2, notast2, mail, direc, obs
    }
  } 

}
