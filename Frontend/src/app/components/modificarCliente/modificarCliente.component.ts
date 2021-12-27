import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarCliente',
  templateUrl: './modificarCliente.component.html',
  styleUrls: ['./modificarCliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modificarCliente(){
    const cedula = (<HTMLInputElement>document.getElementById("cedula")).value;
    const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    const mail = (<HTMLInputElement>document.getElementById("email")).value;
    const direc = (<HTMLInputElement>document.getElementById("direccion")).value;
    const obs = (<HTMLInputElement>document.getElementById("observacionesCliente")).value;
    const t1 = (<HTMLInputElement>document.getElementById("telefono1")).value;
    const notast1 = (<HTMLInputElement>document.getElementById("notasTelefono1")).value;
    const t2 = (<HTMLInputElement>document.getElementById("telefono2")).value;
    const notast2 = (<HTMLInputElement>document.getElementById("notasTelefono2")).value;

    const cliente = {
    Cedula: cedula, NombreCompleto: nombre, Email: mail,
    Direccion: direc, Observaciones:obs, Telefono1:t1,
    NotasTelefono1:notast1, Telefono2:t2, NotasTelefono2:notast2
  }
}

}
