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

  public datos: Clients[] = [];

  clientselect: Clients = new Clients('', "", '', '', '', '');

  @ViewChild(MatTable) tabla1!: MatTable<Clients>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
      localStorage.setItem("clientes", JSON.stringify(this.datos));
    }
  }

  //-------Filtro de busqueda
  dataSource: any;
  ngOnInit() {

    if (localStorage.getItem("isFirstTime") === "true" || localStorage.getItem("isFirstTime") === null) {
      this.datos = [
        new Clients('Alicia Diaz', '86556412', '64864723', '5678908', 'ali@gmail.com', 'SC'),
        new Clients('Maritza Rivas', '64864723', '86556412', '1119101', 'mari@gmail.com', 'SC'),
        new Clients('Rony Araya', '87654321', '86556412', '2344390', 'hecti@gmail.com', 'Garabito'),
        new Clients('Trinidad Perez', '89765432', '67009898', '5578908', 'tri@gmail.com', 'Santa Rosa'),
        new Clients('Rosa Rivas', '67009898', '81234567', '9119101', 'ross@gmail.com', 'SC'),
        new Clients('Tomas Venegas', '81234567', '86556412', '3344390', 'joan@gmail.com', 'SC'),

      ]
      localStorage.setItem("clientes", JSON.stringify(this.datos));
      localStorage.setItem("isFirstTime", "false");
    }
    // extrae los datos del local storage
    const c = localStorage.getItem("clientes");
    if (c !== null) {
      this.datos = JSON.parse(c);
    }

    this.dataSource = new MatTableDataSource(this.datos);

  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregar(): void {
    console.log("entra")

    this.importa.insertarCliente();
    console.log("Prueba");
    console.log(this.importa.cliente_nuevo)

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

