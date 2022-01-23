import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-registrarCliente',
  templateUrl: './registrarCliente.component.html',
  styleUrls: ['./registrarCliente.component.css'],
  providers: [ApiService],
})

export class RegistrarClienteComponent implements OnInit {

  constructor( private api: ApiService ) { }

  ngOnInit() { 
    this.agregarTiposTelefonos();
   }

  agregarTiposTelefonos(): void{
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

  insertarCliente() {
    // Obtiene los datos desde la vista
    const id = "0";
    const cedula = (<HTMLInputElement>document.getElementById("cedula")).value;
    const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    const observaciones = (<HTMLInputElement>document.getElementById("observacionesCliente")).value;
    var telefono1 = (<HTMLInputElement>document.getElementById("telefono1")).value;
    if (telefono1 == '') {
      telefono1 = '0';      
    }

    const $select1 = (<HTMLSelectElement>document.getElementById("tiposTelefono1"));
    var tipotelefono1 = $select1.options[$select1.selectedIndex].innerText;

    const notast1 = (<HTMLInputElement>document.getElementById("notasTelefono1")).value;
    var telefono2 = (<HTMLInputElement>document.getElementById("telefono2")).value;
    if (telefono2 == '') {  
      telefono2 = '0';      
    }
    
    const $select2 = (<HTMLSelectElement>document.getElementById("tiposTelefono2"));
    const tipotelefono2 = $select2.options[$select2.selectedIndex].innerText;
    
    
    const notast2 = (<HTMLInputElement>document.getElementById("notasTelefono2")).value;

    // Fragmento para comunicar con el API

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

    this.api.insertCustomer(cliente);

    //     alert('existe');

  }
}

