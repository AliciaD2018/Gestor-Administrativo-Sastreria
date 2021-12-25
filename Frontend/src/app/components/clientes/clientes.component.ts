import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { RegistrarClienteComponent } from '../registrarCliente/registrarCliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})


export class ClientesComponent {
  private importa:RegistrarClienteComponent
  constructor(
   // private importa:RegistrarClienteComponent
    ) { }

  columnas: string[] = ['nombre', 'telefono1', 'telefono2', 'cedula', 'email', 'direccion', 'borrar'];

  public datos: Clients[] = [
    new Clients('Alicia Diaz', '86556412', '86556412', '5678908', 'ali@gmail.com', 'SC'),
    new Clients('Maritza Rivas', '86556412', '86556412', '5678908', 'ali@gmail.com', 'SC'),
    new Clients('Hector', '86556412', '86556412', '5678908', 'ali@gmail.com', 'SC'),
  ];

  clientselect: Clients = new Clients('', "", '', '', '', '');

  @ViewChild(MatTable) tabla1!: MatTable<Clients>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  //-------Filtro de busqueda
  dataSource: any;
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.datos);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  nuevo(){
    var nomb=this.importa.guardarCliente().Cedula;
    var tel1=this.importa.guardarCliente().Telefono1;
    var tel2=this.importa.guardarCliente().Telefono2;
    var ced=this.importa.guardarCliente().Cedula;
    var mail=this.importa.guardarCliente().Email;
    var dir=this.importa.guardarCliente().Direccion;

    var valor=new Clients(nomb, tel1, tel2, ced, mail, dir)
    this.datos.push(valor);
  } 
 

  //nombre,telefono1,telefono2,cedula,email,direccion
  agregar() {
    this.datos.push(
      new Clients(this.clientselect.nombre, this.clientselect.telefono1,
      this.clientselect.telefono2, this.clientselect.cedula,
      this.clientselect.email, this.clientselect.direccion));
    this.tabla1.renderRows();
    this.clientselect = new Clients('', '', '', '', '', '');
  }

}

export class Clients {
  constructor(
    public nombre: string,
    public telefono1: string,
    public telefono2: string,
    public cedula: string,
    public email: string,
    public direccion: string) {
  }

}

