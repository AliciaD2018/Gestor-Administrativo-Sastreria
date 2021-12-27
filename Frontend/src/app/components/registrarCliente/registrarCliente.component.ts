import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-registrarCliente',
  templateUrl: './registrarCliente.component.html',
  styleUrls: ['./registrarCliente.component.css']
})

export class RegistrarClienteComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() { }

  guardarCliente() { //: Object
    console.log("llega")

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

    this.api.insertCustomer(cliente).subscribe(res =>{
      console.log('Response: ', res);
    });
  
  } 

}

