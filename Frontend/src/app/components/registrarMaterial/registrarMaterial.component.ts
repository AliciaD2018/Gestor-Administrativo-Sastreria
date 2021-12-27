import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-registrarMaterial',
  templateUrl: './registrarMaterial.component.html',
  styleUrls: ['./registrarMaterial.component.css']
})
export class RegistrarMaterialComponent implements OnInit {
  public inventario_nuevo: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() { }

  guardarInventario() { //: Object
    console.log("llegaa")

    const codigo = (<HTMLInputElement>document.getElementById("codigo")).value;
    const descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
    const descorta = (<HTMLInputElement>document.getElementById("descorta")).value;
    const cantidad = (<HTMLInputElement>document.getElementById("cantidad")).value;
    const preciocompra = (<HTMLInputElement>document.getElementById("preciocompra")).value; 
    const precioventa = (<HTMLInputElement>document.getElementById("precioventa")).value;


    this.inventario_nuevo = {
      codigo, descripcion, descorta, preciocompra, precioventa, cantidad
    }

    const i = localStorage.getItem("inventario");
    if (i !== null) {
      var json_inventario = JSON.parse(i);
      json_inventario = [...json_inventario, this.inventario_nuevo];

      // guarda temporalmente
      localStorage.setItem("inventario", JSON.stringify(json_inventario));
    } else {
      localStorage.setItem("inventario", this.inventario_nuevo);
    }

  }

}
