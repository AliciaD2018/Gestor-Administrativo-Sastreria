import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-registrarCliente',
  templateUrl: './registrarCliente.component.html',
  styleUrls: ['./registrarCliente.component.css'],
  providers: [ApiService],
})

export class RegistrarClienteComponent implements OnInit {

  public cliente_nuevo: any;
  private datosalmacenados: any;
  private cedula: any;

  constructor( private api: ApiService ) { }

  ngOnInit() { this.datosalmacenados = JSON.parse(localStorage.getItem('clientes')) }

  insertarCliente() {

    // Obtiene los datos desde la vista
    const cedula = (<HTMLInputElement>document.getElementById("cedula")).value;
    const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    const obs = (<HTMLInputElement>document.getElementById("observacionesCliente")).value;
    const telefono1 = (<HTMLInputElement>document.getElementById("telefono1")).value;
    const notast1 = (<HTMLInputElement>document.getElementById("notasTelefono1")).value;
    const telefono2 = (<HTMLInputElement>document.getElementById("telefono2")).value;
    const notast2 = (<HTMLInputElement>document.getElementById("notasTelefono2")).value;

    // Fragmento para comunicar con el API

    const cliente = {
      Cedula: cedula,
      NombreCompleto: nombre,
      Email: email,
      Direccion: direccion,
      Observaciones: obs,
      Telefono1: telefono1,
      NotasTelefono1: notast1,
      Telefono2: telefono2,
      NotasTelefono2: notast2
    }

    this.api.insertCustomer(cliente);

    //     alert('existe');

  }
}

