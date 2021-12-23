import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FiltroPipe } from './filtro.pipe';
import { Router, RouterModule } from '@angular/router';
import { RegistrarClienteComponent } from '../registrarCliente/registrarCliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})


export class ClientesComponent {
  filtropost = '';

  columnas: string[] = ['nombre', 'telefono1', 'telefono2', 'cedula', 'email', 'direccion', 'borrar'];

  public datos: Articulo[] = [
    new Articulo('Alicia Diaz', '86556412', '86556412', '5678908', 'ali@gmail.com', 'SC'),
    new Articulo('Maritza Rivas', '86556412', '86556412', '5678908', 'ali@gmail.com', 'SC'),
    new Articulo('Hector', '86556412', '86556412', '5678908', 'ali@gmail.com', 'SC'),
  ];

  articuloselect: Articulo = new Articulo('', "", '', '', '', '');

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  
  agregar() {
    this.datos.push(new Articulo(this.articuloselect.nombre, this.articuloselect.telefono1,
      this.articuloselect.telefono2, this.articuloselect.cedula,
      this.articuloselect.email, this.articuloselect.direccion));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo('', '', '', '', '', '');
  }
}

export class Articulo {
  constructor(
    public nombre: string,
    public telefono1: string,
    public telefono2: string,
    public cedula: string,
    public email: string,
    public direccion: string) {
  }

}

