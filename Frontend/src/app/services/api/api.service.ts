import { Injectable } from '@angular/core';
import { CustomerI } from '../../models/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:4500";
  // private url = "https://sistemagestorsastreria.herokuapp.com/";
  private myHeaders = new Headers();
  
  constructor() { }

  insertCustomer(cliente: CustomerI) {
    console.clear();

    this.myHeaders.append("Content-Type", "application/json");

    const clienteJSON = {
      Cedula: cliente.Cedula,
      NombreCompleto: cliente.NombreCompleto,
      Email: cliente.Email,
      Direccion: cliente.Direccion,
      Observaciones: cliente.Observaciones,
      Telefono1: cliente.Telefono1,
      NotasTelefono1: cliente.NotasTelefono1,
      Telefono2: cliente.Telefono2,
      NotasTelefono2: cliente.NotasTelefono2
    }

    // Generado con postman
    var requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
      body: JSON.stringify(clienteJSON)
    };

    return fetch(this.url + `/api/insertcustomer?cedula=${cliente.Cedula}&nombreCompleto=${cliente.NombreCompleto}&email=${cliente.Email}&direccion=${cliente.Direccion}&observaciones=${cliente.Observaciones}&telefono1=${cliente.Telefono1}&notasTelefono1=${cliente.NotasTelefono1}&telefono2=${cliente.Telefono2}&notasTelefono2=${cliente.NotasTelefono2}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  async selectMaterialsInventory(){
    console.clear();
    this.myHeaders.append('Content-Type', 'application/json');
    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectmaterialsinventory`, requestOptions)
    let materiales = await respuesta.json();
    return materiales['materiales'];
  }

  async selectAllCustomers(){
    console.clear();
    
    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectallcustomers`, requestOptions)
    let cliente = await respuesta.json();
    return cliente['clientes'];
  }
}
