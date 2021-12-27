import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarCliente',
  templateUrl: './modificarCliente.component.html',
  styleUrls: ['./modificarCliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modificar(){
    console.log('modificando cliente...')
  }

}
