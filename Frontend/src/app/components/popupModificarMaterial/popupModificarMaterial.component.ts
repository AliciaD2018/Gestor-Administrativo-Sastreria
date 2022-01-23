import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialI } from 'src/app/models/material.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { PopupRegistrarMaterialComponent } from '../popupRegistrarMaterial/popupRegistrarMaterial.component';

@Component({
  selector: 'app-popupModificarMaterial',
  templateUrl: './popupModificarMaterial.component.html',
  styleUrls: ['./popupModificarMaterial.component.css']
})
export class PopupModificarMaterialComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupRegistrarMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MaterialI,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.agregarCategoriasMateriales();
    this.agregarUnidadesDeMedida();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  /**
   * Agrega las categorías de los materiales en el select de la vista
   * */
   agregarCategoriasMateriales(): void {
    const promise = this.api.selectMaterialsCategories().then()
    promise.then((categories) => {
      // Se crea variable de referencia al elemento select
      const $select1 = document.getElementById("categoriasMateriales");
      for (var category of categories) {
        // Se crea una option
        const opcion1 = document.createElement('option');
        const valor = category['CategoriaMaterial'];
        opcion1.value = valor;
        opcion1.text = valor;
        $select1.appendChild(opcion1);
      }
    });
  } // agregarCategoriasMateriales

  /**
   * Agrega las unidades de medida en el select de la vista
   * */
   agregarUnidadesDeMedida(): void {
    const promise = this.api.selectUnits().then()
    promise.then((units) => {
      // Se crea variable de referencia al elemento select
      const $select1 = document.getElementById("unidadesDeMedida");
      for (var unit of units) {
        // Se crea una option
        const opcion1 = document.createElement('option');
        const valor = unit['Simbolo'];
        opcion1.value = valor;
        opcion1.text = valor;
        $select1.appendChild(opcion1);
      }
    });
  } // agregarUnidadesDeMedida

  actualizarMaterial(material: MaterialI) {

    // Leer la categoría del material de los select
    const $categoria = (<HTMLSelectElement>document.getElementById("tiposTelefono1"));
    let categoria = $categoria.options[$categoria.selectedIndex].innerText;

    const $unidad = (<HTMLSelectElement>document.getElementById("tiposTelefono2"));
    var unidadDeMedida = $unidad.options[$unidad.selectedIndex].innerText;

    material.Categoria = categoria;
    material.UnidadMedida = unidadDeMedida;

    // this.api.(material);
  } // actualizarCliente

}
