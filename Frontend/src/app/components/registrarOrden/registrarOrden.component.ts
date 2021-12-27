import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-registrarOrden',
  templateUrl: './registrarOrden.component.html',
  styleUrls: ['./registrarOrden.component.css']
})
export class RegistrarOrdenComponent implements OnInit {
  public orden_nueva: any;
  private datosalmacenados: any;
  private numeroOrden: any;

  constructor(
    private api: ApiService
  ) {this.datosalmacenados = []
    this.numeroOrden = "" }

  ngOnInit() { this.datosalmacenados = JSON.parse(localStorage.getItem('ordenes')) }

  guardarOrden() {

    const numeroOrden = (<HTMLInputElement>document.getElementById("numeroOrden")).value;
    const cliente = (<HTMLInputElement>document.getElementById("cliente")).value;
    const costoTotal = (<HTMLInputElement>document.getElementById("costoTotal")).value;
    const saldo = (<HTMLInputElement>document.getElementById("saldo")).value;
    const fechaEntrega = (<HTMLInputElement>document.getElementById("fechaEntrega")).value;
    const cantidadPrendas = (<HTMLInputElement>document.getElementById("cantidadPrendas")).value;

    for (const iterator of this.datosalmacenados) {
      if (iterator.numeroOrden === numeroOrden) {
        alert('existe');
        return;
      }
    }

    this.orden_nueva = {
     numeroOrden, cliente, costoTotal, saldo, fechaEntrega, cantidadPrendas
    }

    const o = localStorage.getItem("ordenes");
    if (o !== null) {
      var json_clientes = JSON.parse(o);
      json_clientes = [...json_clientes, this.orden_nueva];

      // guarda temporalmente
      localStorage.setItem("ordenes", JSON.stringify(json_clientes));
    } else {
      localStorage.setItem("ordenes", this.orden_nueva);
    }

  }
}
