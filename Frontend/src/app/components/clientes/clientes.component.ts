import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api/api.service';
import { RegistrarClienteComponent } from '../registrarCliente/registrarCliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})

export class ClientesComponent {

  constructor(private api: ApiService) {
  }
  
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
    this.agregarCliente();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregarCliente(): void {
    const promise = this.api.selectCustomer().then()
    promise.then((data) => {
      console.log(JSON.stringify(data));
      for (var index of data) {

        this.datos.push({
          nombre: index['Nombre'], telefono1: index['Telefono'],
          telefono2: index['Telefono'], cedula: index['Cedula'],
          email: index['Email'], direccion: index['Direccion']
        });
        //console.log(index);
      }

      //Se realiza la carga en la tabla general html del inventario.
      const articulos = JSON.stringify(this.datos);
      this.datos = JSON.parse(articulos);
      this.dataSource = new MatTableDataSource(this.datos);

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
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

