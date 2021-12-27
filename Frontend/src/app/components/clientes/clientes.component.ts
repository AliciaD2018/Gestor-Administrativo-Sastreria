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

  //importa: RegistrarClienteComponent
  @ViewChild(RegistrarClienteComponent) importa: RegistrarClienteComponent;


  columnas: string[] = ['nombre', 'telefono1', 'telefono2', 'cedula', 'email', 'direccion', 'borrar'];

  public datos: Clients[] = [
    new Clients('Alicia Diaz', '86556412', '86556412', '5678908', 'ali@gmail.com', 'SC'),
    new Clients('Maritza Rivas', '86556412', '86556412', '1119101', 'mari@gmail.com', 'SC'),
    new Clients('Hector Araya', '86556412', '86556412', '2344390', 'hecti@gmail.com', 'SC'),
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

  //nombre, te1, te2, cedula, email,direccion
  // nuevo() {
  //   var nomb = this.importa.guardarCliente().nombre;
  //   var tel1 = this.importa.guardarCliente().t1;
  //   var tel2 = this.importa.guardarCliente().t2;
  //   var ced = this.importa.guardarCliente().cedula;
  //   var mail = this.importa.guardarCliente().mail;
  //   var dir = this.importa.guardarCliente().direc;

  //   var valor = new Clients(this.importa.guardarCliente().nombre, this.importa.guardarCliente().t1,
  //                           this.importa.guardarCliente().t2, this.importa.guardarCliente().cedula, this.importa.guardarCliente().mail,
  //                           this.importa.guardarCliente().direc);
  //   this.datos.push(valor);
  // }



  //nombre,telefono1,telefono2,cedula,email,direccion
  agregar() {
    /*     this.datos.push(
          new Clients(this.clientselect.nombre, this.clientselect.telefono1,
          this.clientselect.telefono2, this.clientselect.cedula,
          this.clientselect.email, this.clientselect.direccion)); */

    // var valor = new Clients(this.importa.guardarCliente().nombre, this.importa.guardarCliente().t1,
    //   this.importa.guardarCliente().t2, this.importa.guardarCliente().cedula, this.importa.guardarCliente().mail,
    //   this.importa.guardarCliente().direc)
    // this.datos.push(valor);

    this.tabla1.renderRows();
    this.clientselect = new Clients('', '', '', '', '', '');

    console.log(this.datos)
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

