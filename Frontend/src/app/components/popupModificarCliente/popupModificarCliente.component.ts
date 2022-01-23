import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI } from 'src/app/models/customer.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupModificarCliente',
  templateUrl: './popupModificarCliente.component.html',
  styleUrls: ['./popupModificarCliente.component.css']
})
export class PopupModificarClienteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupModificarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerI,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.agregarTiposTelefonos();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  agregarTiposTelefonos(): void {
    const promise = this.api.selectPhonesTypes().then()
    promise.then((types) => {
      // Se crea variable de referencia al elemento select
      const $select1 = document.getElementById("tiposTelefono1");
      const $select2 = document.getElementById("tiposTelefono2");
      for (var type of types) {
        // Se crea una option
        const opcion1 = document.createElement('option');
        const opcion2 = document.createElement('option');
        const valor = type['TipoTelefono'];
        opcion1.value = valor;
        opcion1.text = valor;
        opcion2.value = valor;
        opcion2.text = valor;
        $select1.appendChild(opcion1);
        $select2.appendChild(opcion2);
      }
    });
  } // agregarTiposTelefonos

  actualizarCliente(customer: CustomerI) {

    // Validar si se incluyeron los teléfonos
    if (customer.Telefono1 == '') {
      customer.Telefono1 = '0'
    }

    if (customer.Telefono2 == '') {
      customer.Telefono2 = '0'
    }

    // Leer los tipos de teléfono de los select
    const $select1 = (<HTMLSelectElement>document.getElementById("tiposTelefono1"));
    let tipotelefono1 = $select1.options[$select1.selectedIndex].innerText;

    const $select2 = (<HTMLSelectElement>document.getElementById("tiposTelefono2"));
    var tipotelefono2 = $select2.options[$select2.selectedIndex].innerText;

    customer.TipoTelefono1 = tipotelefono1;
    customer.TipoTelefono2 = tipotelefono2;

    this.api.updateCustomer(customer);
  } // actualizarCliente

}
