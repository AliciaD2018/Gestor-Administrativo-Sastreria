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

    this.datosCliente = JSON.parse(localStorage.getItem('clientes'));

    (<HTMLInputElement>document.getElementById('cedula')).value=this.datosCliente['cedula'];
    (<HTMLInputElement>document.getElementById('nombre')).value=this.datosCliente['nombre'];
    (<HTMLInputElement>document.getElementById('telefono1')).value=this.datosCliente['telefono1'];
    if(this.datosCliente['notasTelefono1']!=undefined){
      (<HTMLInputElement>document.getElementById('notasTelefono1')).value=this.datosCliente['notasTelefono1'];
    }
    if(this.datosCliente['telefono2']!=undefined){
      (<HTMLInputElement>document.getElementById('telefono2')).value=this.datosCliente['telefono2'];
    }
    if(this.datosCliente['notasTelefono2']!=undefined){
      (<HTMLInputElement>document.getElementById('notasTelefono2')).value=this.datosCliente['notasTelefono2'];
    }
    if(this.datosCliente['email']!=undefined){
      (<HTMLInputElement>document.getElementById('email')).value=this.datosCliente['email'];
    }
    if(this.datosCliente['direccion']!=undefined){
      (<HTMLInputElement>document.getElementById('direccion')).value=this.datosCliente['direccion'];
    }
    if(this.datosCliente['observaciones']!=undefined){
      (<HTMLInputElement>document.getElementById('observaciones')).value=this.datosCliente['observaciones'];
    }
  }
  
  agregarTiposTelefonos(): void{
    const promise = this.api.selectPhonesTypes().then()
    promise.then((types) => {
      // Se crea variable de referencia al elemento select
      const $select1 = document.getElementById("tiposSelect1");
      const $select2 = document.getElementById("tiposSelect2");
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
}
