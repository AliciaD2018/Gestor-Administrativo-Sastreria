import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbonoI } from 'src/app/models/abono.interface';
import { MaterialI } from 'src/app/models/material.interface';
import { PrendaI } from 'src/app/models/prenda.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupRegistrarPrendas',
  templateUrl: './popupRegistrarPrendas.component.html',
  styleUrls: ['./popupRegistrarPrendas.component.css']
})
export class PopupRegistrarPrendasComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupRegistrarPrendasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PrendaI,
    // public prendas: Array<PrendaI>,
    // public abonos: Array<AbonoI>,
    private api: ApiService
  ) { }

  abonos: Array<AbonoI> = [];
  prendas: Array<PrendaI> = [];
  materiales: Array<MaterialI> = [];
  tiposPrendas: PrendaI[] = [];

  ngOnInit() {
    this.obtenerFecha();
    this.agregarTiposDePrendas();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  obtenerFecha() {
    let fechaHoy = new Date().toISOString().substring(0, 10);
    let year = fechaHoy.substring(0, 4);
    let mes = fechaHoy.substring(5, 7);
    let dia = fechaHoy.substring(8);
    let fecha = dia + '/' + mes + '/' + year;
    this.data.FechaEncargo = fecha;
  }

  /**
   * Agrega los tipos de prendas en el select de la vista
   * */
  agregarTiposDePrendas(): void {
    const promise = this.api.selectClothesTypes().then()
    promise.then((types) => {
      // Se crea variable de referencia al elemento select
      const $select = document.getElementById("tiposPrendas");
      for (var type of types) {
        // Se guarda un array con las categorias de los materiales para
        // consultar los Id cuando se llame el método actualizarMaterial
        let tipoPrenda: PrendaI = {
          IdPrenda: '', IdOrden: '', NumeroPrenda: '',
          IdTipoPrenda: type['Id'], TipoPrenda: type['TipoPrenda'], Precio: '',
          Cantidad: '',MontoTotal: '', FechaEncargo: '', FechaEntrega: '',
          Descripciones: '', IdEstado: '', EstadoPrenda: ''
        };
        this.tiposPrendas.push(tipoPrenda);

        // Se crea una option
        const opcion = document.createElement('option');
        const valor = type['TipoPrenda'];
        opcion.value = valor;
        opcion.text = valor;
        $select.appendChild(opcion);
      }
    });
  } // agregarTiposDePrendas

  /**
   * Calcula el monto para la prenda
   */
  calcularMonto() {
    let monto = (parseInt(this.data.Cantidad) * parseInt(this.data.Precio)).toString();
    (<HTMLInputElement>document.getElementById('monto')).value = monto;
  }

  /**
   * Inserta un nuevo cliente en la Base de Datos
   * */
  insertarPrenda(prenda: PrendaI) {

    // Leer la categoría del material del select
    const $tipo = (<HTMLSelectElement>document.getElementById("tiposPrendas")); // Referencia al select
    let Tipo = $tipo.options[$tipo.selectedIndex].innerText; // Obtener el texto del select
    let IdTipo: string;
    for (let i = 0; i < this.tiposPrendas.length; i++) {      // Recorre el arreglo
      if (this.tiposPrendas[i].TipoPrenda == Tipo) {          // hasta encontrar el elemento que tiene el mismo texto
        IdTipo = this.tiposPrendas[i].IdTipoPrenda;           // y obtiene el Id
      }
    }

    // Asignar al material los atributos faltantes
    prenda.IdTipoPrenda = IdTipo;
    prenda.TipoPrenda = Tipo;

  } // insertarMaterialAInventario

}
