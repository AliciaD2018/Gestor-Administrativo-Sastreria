import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialI } from 'src/app/models/material.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { PopupModificarMaterialComponent } from '../popupModificarMaterial/popupModificarMaterial.component';
import { PopupRegistrarMaterialComponent } from '../popupRegistrarMaterial/popupRegistrarMaterial.component';

@Component({
  selector: 'app-popupVerDetallesMaterial',
  templateUrl: './popupVerDetallesMaterial.component.html',
  styleUrls: ['./popupVerDetallesMaterial.component.css']
})
export class PopupVerDetallesMaterialComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupRegistrarMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MaterialI, // Aquí se define el nombre y tipo de 'data'
    public dialog: MatDialog,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  //------------------------------------------------------------//
  //-------              EDITAR MATERIAL                --------//
  //------------------------------------------------------------//

  openDialogEditMaterial(material: MaterialI): void {

    const dialogRef = this.dialog.open(PopupModificarMaterialComponent, {
      width: '900px',
      data: material,
    });

    if (material['Categoria'] != undefined) {
      const $select2 = (<HTMLSelectElement>document.getElementById("categoriasMateriales"));
      $select2.options[$select2.selectedIndex].innerText = material['Categoria'];
    }
    if (material['UnidadMedida'] != undefined) {
      const $select2 = (<HTMLSelectElement>document.getElementById("unidadesDeMedida"));
      $select2.options[$select2.selectedIndex].innerText = material['UnidadMedida'];
    }

    dialogRef.afterClosed().subscribe(customer => {
      console.log('The dialog was closed');
      // this.api.updateCustomer(customer);
      // window.location.reload();
    });
  } // openDialogEditCustomer
  
}
