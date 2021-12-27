import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-registrarCliente',
  templateUrl: './registrarCliente.component.html',
  styleUrls: ['./registrarCliente.component.css'],
  providers: [ ApiService ],
})

  //@ViewChild(ClientesComponent) importa: ClientesComponent;

 
export class RegistrarClienteComponent implements OnInit {
  
  public cliente_nuevo: any;
  private datosalmacenados: any;
  private cedula: any;

  constructor(
    private api: ApiService
  ) { 
    this.datosalmacenados = []
    this.cedula = ""}


  ngOnInit() { this.datosalmacenados = JSON.parse(localStorage.getItem('clientes')) }

  guardarCliente() { //: Object
    console.log("llegaa")

    const cedula = (<HTMLInputElement>document.getElementById("cedula")).value;
    const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    const obs = (<HTMLInputElement>document.getElementById("observacionesCliente")).value;
    const telefono1 = (<HTMLInputElement>document.getElementById("telefono1")).value;
    const notast1 = (<HTMLInputElement>document.getElementById("notasTelefono1")).value;
    const telefono2 = (<HTMLInputElement>document.getElementById("telefono2")).value;
    const notast2 = (<HTMLInputElement>document.getElementById("notasTelefono2")).value;

    for (const iterator of this.datosalmacenados) {
      if (iterator.cedula === cedula) {
        alert('existe');
        return;
      }
    }

    this.cliente_nuevo = {
     nombre, cedula, direccion, email, telefono1, telefono2
    }

    const c = localStorage.getItem("clientes");
    if (c !== null) {
      var json_clientes = JSON.parse(c);
      json_clientes = [...json_clientes, this.cliente_nuevo];

      // guarda temporalmente
      localStorage.setItem("clientes", JSON.stringify(json_clientes));
    } else {
      localStorage.setItem("clientes", this.cliente_nuevo);
    }

  }
}

