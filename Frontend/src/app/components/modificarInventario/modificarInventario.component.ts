import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarInventario',
  templateUrl: './modificarInventario.component.html',
  styleUrls: ['./modificarInventario.component.css']
})
export class ModificarInventarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modificar(){
    console.log('modificando material.....')
  }

}
