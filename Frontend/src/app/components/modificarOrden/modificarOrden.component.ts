import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarOrden',
  templateUrl: './modificarOrden.component.html',
  styleUrls: ['./modificarOrden.component.css']
})
export class ModificarOrdenComponent implements OnInit {

  private datosalmacenados: any;
  private numeroOrden: any;

  constructor() {
    this.datosalmacenados = []
    this.numeroOrden = ""
  }

  ngOnInit() {
    this.datosalmacenados = JSON.parse(localStorage.getItem('ordenes'))
  }

  buscar() {
    this.numeroOrden = (<HTMLInputElement>document.getElementById("numeroOrden")).value;
    const iterator = this.buscarAux();

    if (iterator !== null) {
      (<HTMLInputElement>document.getElementById("numeroOrden")).value = iterator.numeroOrden;
      (<HTMLInputElement>document.getElementById("cliente")).value = iterator.cliente;
      (<HTMLInputElement>document.getElementById("costoTotal")).value = iterator.costoTotal;
      (<HTMLInputElement>document.getElementById("saldo")).value = iterator.saldo;
      (<HTMLInputElement>document.getElementById("fechaEntrega")).value = iterator.fechaEntrega;
      (<HTMLInputElement>document.getElementById("cantidadPrendas")).value = iterator.cantidadPrendas;
      return;
    }
    alert("Orden" + this.numeroOrden + " no encontrada.")
  }

  buscarAux() {
    for (const iterator of this.datosalmacenados) {
      if (iterator.numeroOrden === this.numeroOrden) {

        (<HTMLInputElement>document.getElementById("numeroOrden")).value = iterator.numeroOrden;
        (<HTMLInputElement>document.getElementById("cliente")).value = iterator.cliente;
        (<HTMLInputElement>document.getElementById("costoTotal")).value = iterator.costoTotal;
        (<HTMLInputElement>document.getElementById("saldo")).value = iterator.saldo;
        (<HTMLInputElement>document.getElementById("fechaEntrega")).value = iterator.fechaEntrega;
        (<HTMLInputElement>document.getElementById("cantidadPrendas")).value = iterator.cantidadPrendas;
        return iterator;
      }
    }
    return null;
  }

  modificarOrden() {
    console.log('modificando orden...')
    
    for (const iterator of this.datosalmacenados) {
      if (iterator.numeroOrden === this.numeroOrden) {

        iterator.numeroOrden = (<HTMLInputElement>document.getElementById("numeroOrden")).value;
        iterator.cliente = (<HTMLInputElement>document.getElementById("cliente")).value;
        iterator.costoTotal = (<HTMLInputElement>document.getElementById("costoTotal")).value;
        iterator.saldo = (<HTMLInputElement>document.getElementById("saldo")).value;
        iterator.fechaEntrega = (<HTMLInputElement>document.getElementById("fechaEntrega")).value;
        iterator.cantidadPrendas = (<HTMLInputElement>document.getElementById("cantidadPrendas")).value;
        
        localStorage.setItem("ordenes", JSON.stringify(this.datosalmacenados))
        alert("Orden modificada")
        return;
      }
    }


  }

}
