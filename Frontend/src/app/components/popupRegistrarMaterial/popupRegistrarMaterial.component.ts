import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialI } from 'src/app/models/material.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupRegistrarMaterial',
  templateUrl: './popupRegistrarMaterial.component.html',
  styleUrls: ['./popupRegistrarMaterial.component.css']
})
export class PopupRegistrarMaterialComponent implements OnInit {

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

  obtenerSiguienteId() {
    const promise = this.api.selectNextMaterialId().then()
    promise.then((id) => {
      let idNuevoMaterial = id['SiguienteIdMaterial']; // El nombre 'SiguienteIdMaterial' se define en el procedimiento almacenado de la BD
      return idNuevoMaterial;
    });
  }

  generarCodigoMaterialNuevo(){
    const $categoria = (<HTMLSelectElement>document.getElementById("categoriasMateriales")); // Referencia al select
    let categoria = $categoria.options[$categoria.selectedIndex].innerText; // Obtener el texto del select
    let prefijoCategoria = categoria.substring(0,3); // Tres primeras letras de la categoría
    console.log(prefijoCategoria);
    let siguienteId = this.obtenerSiguienteId();
    console.log("Tipo id:",typeof siguienteId);
  }

}
