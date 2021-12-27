import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RegistrarClienteComponent } from '../registrarCliente/registrarCliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})



export class ClientesComponent {

  @ViewChild(RegistrarClienteComponent) importa: RegistrarClienteComponent;


  columnas: string[] = ['nombre', 'telefono1', 'telefono2', 'cedula', 'email', 'direccion', 'borrar'];

  public datos: Clients[] = [
    new Clients('Alicia Diaz', '86556412', '64864723', '5678908', 'ali@gmail.com', 'SC'),
    new Clients('Maritza Rivas', '64864723', '86556412', '1119101', 'mari@gmail.com', 'SC'),
    new Clients('Rony Araya', '87654321', '86556412', '2344390', 'hecti@gmail.com', 'Garabito'),
    new Clients('Trinidad Perez', '89765432', '67009898', '5578908', 'tri@gmail.com', 'Santa Rosa'),
    new Clients('Rosa Rivas', '67009898', '81234567', '9119101', 'ross@gmail.com', 'SC'),
    new Clients('Tomas Venegas', '81234567', '86556412', '3344390', 'joan@gmail.com', 'SC'),
    
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

  nuevo(nombre) {
    console.log("llega a nuevo")

    var valor = new Clients('malisim',nombre,'d1','d1','d1','d1')
    console.log(valor);
    this.datos.push(valor);

    this.tabla1.renderRows();
    this.clientselect = new Clients('', '', '', '', '', '');

    console.log(this.datos)
  }

  //nombre,telefono1,telefono2,cedula,email,direccion
  agregar():void {
    console.log("entra")

    /*     this.datos.push(
          new Clients(this.clientselect.nombre, this.clientselect.telefono1,
          this.clientselect.telefono2, this.clientselect.cedula,
          this.clientselect.email, this.clientselect.direccion)); */

    //d1=this.importa.guardarCliente().NombreCompleto;

    var valor = this.importa.guardarCliente();
    console.log('*******************************')
    console.log(valor);

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

