import { Injectable } from '@angular/core';
import { CustomerI } from '../../models/customer.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private url = "http://localhost:4400";

  constructor(private http: HttpClient) { }

  insertCustomer(cliente:CustomerI): Observable<any>{
    
    console.log("Comunicating with the API (api.service.ts)...");
    //console.log(cliente);

    return this.http.post<CustomerI>(this.url + "/api/insertcustomer", cliente)
  }

}
