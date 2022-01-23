import { Injectable } from '@angular/core';
import { EmailI } from 'src/app/models/email.interface';
import { CustomerI } from '../../models/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:4500";
  private myHeaders = new Headers();

  constructor() { }

  /**********************************************************************************************************************************************/
  async insertCustomer(cliente: CustomerI) {
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

  /**********************************************************************************************************************************************/
  async updateCustomer(cliente: CustomerI) {
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

  /**********************************************************************************************************************************************/
  async selectMaterialsInventory() {
    console.clear();

    this.myHeaders.append('Content-Type', 'application/json');
    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectmaterialsinventory`, requestOptions);
    let materiales = await respuesta.json();
    return materiales['materiales']; // Este nombre se define en el end point del API:
  }

  /**********************************************************************************************************************************************/
  async selectAllCustomers() {
    console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectallcustomers`, requestOptions);
    let cliente = await respuesta.json();
    return cliente['clientes']; // Este nombre se define en el end point del API:
  }

  /**********************************************************************************************************************************************/
  async selectAllOrders() {
    console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectallorders`, requestOptions);
    let cliente = await respuesta.json();
    return cliente['ordenes']; // Este nombre se define en el end point del API:
  }

  /**********************************************************************************************************************************************/
  async selectMaterialsCategories() {
    console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectmaterialscategories`, requestOptions);
    let categorias = await respuesta.json();
    return categorias['categorias']; // Este nombre se define en el end point del API:
  }

  /**********************************************************************************************************************************************/
  async selectPhonesTypes() {
    console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectphonestypes`, requestOptions);
    let tipos = await respuesta.json();
    return tipos['tipostelefonos']; // Este nombre se define en el end point del API:
  }

    /**********************************************************************************************************************************************/
    async selectUnits() {
      console.clear();
  
      this.myHeaders.append('Content-Type', 'application/json');
  
      var requestOptions = {
        method: 'GET',
        headers: this.myHeaders,
      };
  
      let respuesta = await fetch(this.url + `/api/selectunits`, requestOptions);
      let categorias = await respuesta.json();
      return categorias['unidadesdemedidas']; // Este nombre se define en el end point del API: res.status(200).send({
                                              //                                                    unidadesdemedidas: response
                                              //                                                });
    }

  /**********************************************************************************************************************************************/
  async selectNextOrderId() {
    console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectnextorderid`, requestOptions);
    let id = await respuesta.json();
    return id['idsiguienteorden'][0]; // Este nombre se define en el end point del API:
  }

  /**********************************************************************************************************************************************/
  async selectOrdersDetailsForCalendar() {
    //console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectordersdetailsforcalendar`, requestOptions);
    let categorias = await respuesta.json();
    return categorias['detallesordenesparacalendario']; // Este nombre se define en el end point del API:
  }

  /**********************************************************************************************************************************************/
  async sendEmail(body: EmailI) {
    console.clear();

    this.myHeaders.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    var requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
    };

    await fetch(this.url + `/api/sendemail?body=${JSON.stringify(body)}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  } // sendEmail

  /**********************************************************************************************************************************************/
  async deleteCustomer(idCliente: number) {
    console.clear();

    console.log("Service, Id: ", idCliente);
    console.log("Service, Type of Id: ",typeof idCliente);

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'DELETE',
      headers: this.myHeaders,
    };

    await fetch(this.url + `/api/deletecustomer?id=${idCliente}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

} // ApiService