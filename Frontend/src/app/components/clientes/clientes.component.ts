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

  constructor(private api: ApiService ) {
    
  }
  
  @ViewChild(RegistrarClienteComponent) importa: RegistrarClienteComponent;


  columnas: string[] = ['nombre', 'telefono1', 'telefono2', 'cedula', 'email', 'direccion', 'borrar'];
  clickedRows = new Set<Customers>();

  public datos: Customers[] = [];

  @ViewChild(MatTable) tabla1!: MatTable<Customers>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
      localStorage.setItem("clientes", JSON.stringify(this.datos));
    }
  }

  dataSource: any;
  ngOnInit() {
    this.agregarClientes();
  }

  //-------Filtro de busqueda
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregarClientes(): void {
    const promise = this.api.selectAllCustomers().then()
    promise.then((data) => {
      // console.log("data: ",JSON.stringify(data));
      for (var index of data) {

        this.datos.push({
          nombre: index['NombreCompleto'], telefono1: index['Telefono1'],
          telefono2: index['Telefono2'], cedula: index['Cedula'],
          email: index['Email'], direccion: index['Direccion']
        });
        // console.log("-------------->",index);
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

export class Customers {
  constructor(
    public nombre: string,
    public telefono1: string,
    public telefono2: string,
    public cedula: string,
    public email: string,
    public direccion: string) {
  }
  

}

