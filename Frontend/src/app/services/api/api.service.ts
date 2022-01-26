import { Injectable } from '@angular/core';
import { AbonoI } from 'src/app/models/abono.interface';
import { EmailI } from 'src/app/models/email.interface';
import { MaterialI } from 'src/app/models/material.interface';
import { OrdenI } from 'src/app/models/orden.interface';
import { PrendaI } from 'src/app/models/prenda.interface';
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
    // console.clear();

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
    // console.clear();

    this.myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'PUT',
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
    // console.clear();

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
    // console.clear();

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
    // console.clear();

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
    // console.clear();

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
    // console.clear();

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
      // console.clear();
  
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
    // console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectnextorderid`, requestOptions);
    let id = await respuesta.json();
    return id['idsiguienteorden'][0]; // El nombre 'idsiguienteorden' se define en el end point del API
  }

  /**********************************************************************************************************************************************/
  async selectOrdersDetailsForCalendar() {
    //// console.clear();

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
    // console.clear();

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
    // console.clear();

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

  /**********************************************************************************************************************************************/
  async deleteMaterial(idMaterial: number) {
    // console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'DELETE',
      headers: this.myHeaders,
    };

    await fetch(this.url + `/api/deletematerial?id=${idMaterial}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  /**********************************************************************************************************************************************/
  async updateMaterialInvnetory(material: MaterialI) {
    // console.clear();

    this.myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'PUT',
      headers: this.myHeaders,
    };

    return fetch(this.url + `/api/updatematerialinventory?idMaterial=${material.IdMaterial}&idCategoria=${material.IdCategoria}` +
      `&idUnidadMedida=${material.IdUnidad}&descripcion=${material.Descripcion}&cantidad=${material.Cantidad}` +
      `&precioCompra=${material.PrecioCompra}&precioVenta=${material.PrecioVenta}`,
      requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  /**********************************************************************************************************************************************/
  async insertMaterialInvnetory(material: MaterialI) {
    // console.clear();

    this.myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
    };

    return fetch(this.url + `/api/insertmaterialtoinventory?codigo=${material.Codigo}&idCategoriaMaterial=${material.IdCategoria}` +
      `&descripcion=${material.Descripcion}&cantidad=${material.Cantidad}&idUnidadMedida=${material.IdUnidad}` +
      `&precioCompra=${material.PrecioCompra}&precioVenta=${material.PrecioVenta}&fechaRegistro=${material.FechaRegistro}`,
      requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  /**********************************************************************************************************************************************/
  async selectNextMaterialId() {
    // console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectnextmaterialid`, requestOptions);
    let id = await respuesta.json();
    return id['idsiguientematerial'][0]; // Este nombre se define en el end point del API
  }

  /**********************************************************************************************************************************************/
  async selectBalance(idOrden: string) {
    // console.clear();
    
    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectbalance?idOrden=${idOrden}`, requestOptions);
    let balance = await respuesta.json();
    return balance['balance'][0]; // El nombre 'balace' se define en el end point del API
  }

  /**********************************************************************************************************************************************/
  async insertPayment(abono: AbonoI) {
    // console.clear();

    this.myHeaders.append("Content-Type", "application/json");

    // Generado con postman
    var requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
    };

    console.log(abono);

    return fetch(this.url + `/api/insertcustomer?idOrden=${abono.IdOrden}&saldoAnterior=${abono.SaldoAnterior}` +
      `&montoAbono=${abono.MontoAbono}&nuevoSaldo=${abono.NuevoSaldo}&anotaciones=${abono.Anotaciones}` +
      `&fechaAbono=${abono.FechaAbono}`,
      requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  /**********************************************************************************************************************************************/
  async updatePayment(abono: AbonoI) {
    // console.clear();

    this.myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'PUT',
      headers: this.myHeaders,
    };

    return fetch(this.url + `/api/updatematerialinventory?idAbono=${abono.IdAbano}&anotaciones=${abono.Anotaciones}`,
      requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  /**********************************************************************************************************************************************/
  async selectNextClothingNumber(idOrden: string) {
    // console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectnextclothingnumber?idOrden=${idOrden}`, requestOptions);
    let numero = await respuesta.json();
    return numero['numerosiguienteprenda'][0]; // Este nombre se define en el end point del API
  }

  /**********************************************************************************************************************************************/
  async selectClothesTypes() {
    // console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectclothestypes`, requestOptions);
    let tipos = await respuesta.json();
    return tipos['tiposprendas']; // Este nombre se define en el end point del API:
  }

  /**********************************************************************************************************************************************/
  async insertOrder(orden: OrdenI) {
    // console.clear();

    this.myHeaders.append("Content-Type", "application/json");

    // Generado con postman
    var requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
    };

    return fetch(this.url + `/api/insertorder?idCliente=${orden.IdCliente}&fechaInicio=${orden.FechaInicio}`,
      requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  /**********************************************************************************************************************************************/
  async selectNextCustomerId() {
    // console.clear();

    this.myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
    };

    let respuesta = await fetch(this.url + `/api/selectnextcustomerid`, requestOptions);
    let id = await respuesta.json();
    return id['idsiguientecliente'][0]; // El nombre 'idsiguientecliente' se define en el end point del API
  }

  /**********************************************************************************************************************************************/
  async insertClothing(prenda: PrendaI) {
    // console.clear();

    this.myHeaders.append("Content-Type", "application/json");

    // Generado con postman
    var requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
    };

    return fetch(this.url + `/api/insertclothing?idOrden=${prenda.IdOrden}&numeroPrenda=${prenda.NumeroPrenda}` +
      `&idTipoPrenda=${prenda.IdTipoPrenda}&precioTrabajo=${prenda.Precio}&cantidadPrendas=${prenda.Cantidad}` +
      `&fechaEncargo=${prenda.FechaEncargo}&fechaEntrega=${prenda.FechaEntrega}&descripcionTrabajo=${prenda.Descripciones}`,
      requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

} // ApiService