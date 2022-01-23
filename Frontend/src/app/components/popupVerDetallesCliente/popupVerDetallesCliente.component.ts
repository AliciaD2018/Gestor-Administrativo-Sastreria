import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI } from 'src/app/models/customer.interface';
import { PopupModificarClienteComponent } from '../popupModificarCliente/popupModificarCliente.component';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupVerDetallesCliente',
  templateUrl: './popupVerDetallesCliente.component.html',
  styleUrls: ['./popupVerDetallesCliente.component.css']
})
export class PopupVerDetallesClienteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupVerDetallesClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerI, // Aquí se define el nombre y tipo de 'data'
    public dialog: MatDialog,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  //------------------------------------------------------------//
  //-------              EDITAR CLIENTE                 --------//
  //------------------------------------------------------------//

  openDialogEditCustomer(cliente: CustomerI): void {

    const dialogRef = this.dialog.open(PopupModificarClienteComponent, {
      width: '900px',
      data: cliente,
    });

    if (cliente['TipoTelefono1'] != undefined) {
      const $select2 = (<HTMLSelectElement>document.getElementById("tiposTelefono1"));
      $select2.options[$select2.selectedIndex].innerText = cliente['TipoTelefono1'];
    }
    if (cliente['TipoTelefono2'] != undefined) {
      const $select2 = (<HTMLSelectElement>document.getElementById("tiposTelefono2"));
      $select2.options[$select2.selectedIndex].innerText = cliente['TipoTelefono2'];
    }

    dialogRef.afterClosed().subscribe(customer => {
      console.log('The dialog was closed');
      this.api.updateCustomer(customer);
    });
  } // openDialogEditCustomer
}
