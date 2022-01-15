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

    // Generado con postman
    var requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
    };

    return fetch(this.url + `/api/insertcustomer?cedula=${cliente.Cedula}&nombreCompleto=${cliente.NombreCompleto}` +
                            `&email=${cliente.Email}&direccion=${cliente.Direccion}&observaciones=${cliente.Observaciones}` +
                            `&telefono1=${cliente.Telefono1}&tipoTelefono1=${cliente.TipoTelefono1}&notasTelefono1=${cliente.NotasTelefono1}` +
                            `&telefono2=${cliente.Telefono2}&tipoTelefono2=${cliente.TipoTelefono2}&notasTelefono2=${cliente.NotasTelefono2}`,
                            requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  async updateCustomer(cliente: CustomerI){
    console.clear();

    this.myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
    };

    return fetch(this.url + `/api/updatecustomer?id=${cliente.Id}&cedula=${cliente.Cedula}&nombreCompleto=${cliente.NombreCompleto}` +
                            `&email=${cliente.Email}&direccion=${cliente.Direccion}&observaciones=${cliente.Observaciones}` +
                            `&telefono1=${cliente.Telefono1}&tipoTelefono1=${cliente.TipoTelefono1}&notasTelefono1=${cliente.NotasTelefono1}` +
                            `&telefono2=${cliente.Telefono2}&tipoTelefono2=${cliente.TipoTelefono2}&notasTelefono2=${cliente.NotasTelefono2}`,
                            requestOptions)
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

    let respuesta = await fetch(this.url + `/api/selectmaterialsinventory`, requestOptions);
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

    let respuesta = await fetch(this.url + `/api/selectallcustomers`, requestOptions);
    let cliente = await respuesta.json();
    return cliente['clientes'];
  }

  async selectOrders(){
    console.clear();
    
    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectorders`, requestOptions);
    let ordenes = await respuesta.json();
    return ordenes['ordenes']; //la clave esta en el endpoint como response
  }

  async selectMaterialsCategories(){
    console.clear();
  
    this.myHeaders.append('Content-Type', 'application/json');
  
    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectmaterialscategories`, requestOptions);
    let categorias = await respuesta.json();
    return categorias['categorias'];
  }

  async selectPhonesTypes(){
    console.clear();

    this.myHeaders.append('Content-Type', 'application/json');
  
    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectphonestypes`, requestOptions);
    let tipos = await respuesta.json();
    return tipos['tipostelefonos'];
  }

  async selectOrdersDetailsForCalendar(){
    console.clear();

    this.myHeaders.append('Content-Type', 'application/json');
  
    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectordersdetailsforcalendar`, requestOptions);
    let categorias = await respuesta.json();
    return categorias['detallesordenesparacalendario'];
  }

} // ApiService