import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarInventario',
  templateUrl: './modificarInventario.component.html',
  styleUrls: ['./modificarInventario.component.css']
})
export class ModificarInventarioComponent implements OnInit {

  private datosalmacenados: any;
  private codigo: any;

  constructor() {
    this.datosalmacenados = []
    this.codigo = ""
  }

  ngOnInit() {
    this.datosalmacenados = JSON.parse(localStorage.getItem('inventarios'))
  }

  buscar() {
    this.codigo = (<HTMLInputElement>document.getElementById("codigo")).value;
    const iterator = this.buscarAux();

    if (iterator !== null) {
      (<HTMLInputElement>document.getElementById("descripcion")).value = iterator.descripcion;
      (<HTMLInputElement>document.getElementById("descorta")).value = iterator.descorta;
      (<HTMLInputElement>document.getElementById("precio")).value = iterator.precio;
      (<HTMLInputElement>document.getElementById("fecharegistro")).value = iterator.fecharegistro;
      (<HTMLInputElement>document.getElementById("cantidad")).value = iterator.cantidad;
      return;
    }
    alert("Material con codigo " + this.codigo + " no encontrado.")
  }

  buscarAux() {
    for (const iterator of this.datosalmacenados) {
      if (iterator.codigo === this.codigo) {

        (<HTMLInputElement>document.getElementById("descripcion")).value = iterator.descripcion;
        (<HTMLInputElement>document.getElementById("descorta")).value = iterator.descorta;
        (<HTMLInputElement>document.getElementById("precio")).value = iterator.precio;
        (<HTMLInputElement>document.getElementById("fecharegistro")).value = iterator.fecharegistro;
        (<HTMLInputElement>document.getElementById("cantidad")).value = iterator.cantidad;
        return iterator;
      }
    }
    return null;
  }

  modificar() {
    console.log('modificando inventario...')
    
    for (const iterator of this.datosalmacenados) {
      if (iterator.codigo === this.codigo) {

        iterator.descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
        iterator.descorta = (<HTMLInputElement>document.getElementById("descorta")).value;
        iterator.precio = (<HTMLInputElement>document.getElementById("precio")).value;
        iterator.fecharegistro = (<HTMLInputElement>document.getElementById("fecharegistro")).value;
        iterator.cantidad = (<HTMLInputElement>document.getElementById("cantidad")).value;
        
        localStorage.setItem("inventarios", JSON.stringify(this.datosalmacenados))
        alert("Inventario modificado")
        return;
      }
    }


  }

}
