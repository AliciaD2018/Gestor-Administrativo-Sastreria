import { Injectable } from '@angular/core';
import { CustomerI } from '../../models/customer.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private url = "http://localhost:5000/api/insertcustomer";

  constructor(private http:HttpClient) { }

  insertCustomer(cliente:CustomerI){
    
    console.log(cliente);

    return this.http.post(this.url, cliente);

    // insertCustomers(cliente.Cedula, cliente.NombreCompleto, clie