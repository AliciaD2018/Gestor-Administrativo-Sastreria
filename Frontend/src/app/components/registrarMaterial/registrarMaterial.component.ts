import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-registrarMaterial',
  templateUrl: './registrarMaterial.component.html',
  styleUrls: ['./registrarMaterial.component.css']
})


export class RegistrarMaterialComponent implements OnInit {

  public inventario_nuevo: any;
  private datosalmacenados: any;
  private codigo: any;

  constructor(

  ) { 
    this.datosalmacenados = []
    this.codigo = ""
  }

  ngOnInit() {  this.datosalmacenados = JSON.parse(localStorage.getItem('inventarios'))}

  guardarInventario() { //: Object
    console.log("llegaa")
    //'codigo', 'descripcion','descorta', 'precio', 'fecharegistro','cantidad', 'borrar'

    const codigo = (<HTMLInputElement>document.getElementById("codigo")).value;
    const descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
    const descorta = (<HTMLInputElement>document.getElementById("descorta")).value;
    const precio = (<HTMLInputElement>document.getElementById("precio")).value;
    const fecharegistro = (<HTMLInputElement>document.getElementById("fecharegistro")).value; 
    const cantidad = (<HTMLInputElement>document.getElementById("cantidad")).value;

    for (const iterator of this.datosalmacenados) {
      if (iterator.codigo === codigo) {
        alert('existe');
        return;
      }
    }
 

    this.inventario_nuevo = {
       codigo, descripcion, descorta, precio,cantidad,fecharegistro
    }
    console.log(this.inventario_nuevo);


    const i = localStorage.getItem("inventarios");

    if (i !== null) {
      var json_inventario = JSON.parse(i);
      json_inventario = [...json_inventario, this.inventario_nuevo];

      // guarda temporalmente
      localStorage.setItem("inventarios", JSON.stringify(json_inventario));
    } else {
      localStorage.setItem("inventarios", this.inventario_nuevo);
    }
   
  }

}
