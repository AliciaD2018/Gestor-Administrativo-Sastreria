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


  columnas: string[] = ['cedula', 'nombre', 'telefono1', 'telefono2', 'email', 'direccion', 'opciones'];
  clickedRows = new Set<Customers>();

  public clientes: Customers[] = [];

  @ViewChild(MatTable) tabla1!: MatTable<Customers>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.clientes.splice(cod, 1);
      this.tabla1.renderRows();
      localStorage.setItem("clientes", JSON.stringify(this.clientes));
    }
  }

  pasarDatosCliente(j: number){
    localStorage.setItem('cliente', JSON.stringify(this.clientes[j]));
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

  pasar

  agregarClientes(): void {
    const promise = this.api.selectAllCustomers().then()
    promise.then((customers) => {
      // console.log("data: ",JSON.stringify(data));
      for (var customer of customers) {

        this.clientes.push({
          id: customer['Id'], cedula: customer['Cedula'], nombre: customer['NombreCompleto'],
          telefono1: customer['Telefono1'], tipoTelefono1: customer['TipoTelefono1'], notasTelefono1: customer['NotasTelefono1'],
          telefono2: customer['Telefono2'], tipoTelefono2: customer['TipoTelefono2'], notasTelefono2: customer['NotasTelefono2'],
          email: customer['Email'], direccion: customer['Direccion'], observaciones: customer['Observaciones']
        });
        // console.log("-------------->",index);
      }

      //Se realiza la carga en la tabla general html del inventario.
      const Clientes = JSON.stringify(this.clientes);
      this.clientes = JSON.parse(Clientes);
      this.dataSource = new MatTableDataSource(this.clientes);

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

}

export class Customers {
  constructor(
    public id: string,
    public cedula: string,
    public nombre: string,
    public telefono1: string,
    public tipoTelefono1: string,
    public notasTelefono1: string,
    public telefono2: string,
    public tipoTelefono2: string,
    public notasTelefono2: string,
    public email: string,
    public direccion: string,
    public observaciones: string) {
  }
  

}

