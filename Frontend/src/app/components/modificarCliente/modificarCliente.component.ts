import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarCliente',
  templateUrl: './modificarCliente.component.html',
  styleUrls: ['./modificarCliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  private datosalmacenados: any;
  private cedula: any;

  constructor() {
    this.datosalmacenados = []
    this.cedula = ""
  }

  ngOnInit() {
    this.datosalmacenados = JSON.parse(localStorage.getItem('clientes'))
  }

  buscar() {
    this.cedula = (<HTMLInputElement>document.getElementById("cedula")).value;
    const iterator = this.buscarAux();

    if (iterator !== null) {
      (<HTMLInputElement>document.getElementById("nombre")).value = iterator.nombre;
      (<HTMLInputElement>document.getElementById("email")).value = iterator.email;
      (<HTMLInputElement>document.getElementById("direccion")).value = iterator.direccion;
      (<HTMLInputElement>document.getElementById("observacionesCliente")).value = iterator.observacionesCliente;
      (<HTMLInputElement>document.getElementById("telefono1")).value = iterator.telefono1;
      (<HTMLInputElement>document.getElementById("notasTelefono1")).value = iterator.notasTelefono1;
      (<HTMLInputElement>document.getElementById("telefono2")).value = iterator.telefono2;
      (<HTMLInputElement>document.getElementById("notasTelefono2")).value = iterator.notasTelefono2;
      return;
    }
    alert("Usuario con cedula " + this.cedula + " no encontrado.")
  }

  buscarAux() {
    for (const iterator of this.datosalmacenados) {
      if (iterator.cedula === this.cedula) {

        (<HTMLInputElement>document.getElementById("nombre")).value = iterator.nombre;
        (<HTMLInputElement>document.getElementById("email")).value = iterator.email;
        (<HTMLInputElement>document.getElementById("direccion")).value = iterator.direccion;
        (<HTMLInputElement>document.getElementById("observacionesCliente")).value = iterator.observacionesCliente;
        (<HTMLInputElement>document.getElementById("telefono1")).value = iterator.telefono1;
        (<HTMLInputElement>document.getElementById("notasTelefono1")).value = iterator.notasTelefono1;
        (<HTMLInputElement>document.getElementById("telefono2")).value = iterator.telefono2;
        (<HTMLInputElement>document.getElementById("notasTelefono2")).value = iterator.notasTelefono2;
        return iterator;
      }
    }
    return null;
  }

  modificar() {
    console.log('modificando cliente...')
    
    for (const iterator of this.datosalmacenados) {
      if (iterator.cedula === this.cedula) {

        iterator.nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
        iterator.email = (<HTMLInputElement>document.getElementById("email")).value;
        iterator.direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
        iterator.observacionesCliente = (<HTMLInputElement>document.getElementById("observacionesCliente")).value;
        iterator.telefono1 = (<HTMLInputElement>document.getElementById("telefono1")).value;
        iterator.notasTelefono1 = (<HTMLInputElement>document.getElementById("notasTelefono1")).value;
        iterator.telefono2 = (<HTMLInputElement>document.getElementById("telefono2")).value;
        iterator.notasTelefono2 = (<HTMLInputElement>document.getElementById("notasTelefono2")).value;
        
        localStorage.setItem("clientes", JSON.stringify(this.datosalmacenados))
        alert("Cliente modificado")
        return;
      }
    }


  }

}
