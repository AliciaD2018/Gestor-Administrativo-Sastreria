import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RegistrarMaterialComponent } from '../registrarMaterial/registrarMaterial.component';
import { ApiService } from '../../services/api/api.service';
import { MaterialI } from 'src/app/models/material.interface';
import { PopupRegistrarMaterialComponent } from '../popupRegistrarMaterial/popupRegistrarMaterial.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupVerDetallesMaterialComponent } from '../popupVerDetallesMaterial/popupVerDetallesMaterial.component';
import { PopupModificarMaterialComponent } from '../popupModificarMaterial/popupModificarMaterial.component';
import { AdvertenciaI } from 'src/app/models/advertencia.interface';
import { PopupAdvertenciaComponent } from '../popupAdvertencia/popupAdvertencia.component';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})

export class InventarioComponent implements OnInit {

  constructor(
    private api: ApiService,
    public dialog: MatDialog) {
  }

  @ViewChild(RegistrarMaterialComponent) importa: RegistrarMaterialComponent;

  columnas: string[] = ['codigo', 'categoria', 'descripcion', 'cantidad', 'unidadmedida', 'precio', 'fecharegistro', 'opciones'];

  private inventario: MaterialI[] = [];

  @ViewChild(MatTable) tabla1!: MatTable<MaterialI>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.inventario.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }
  
  dataSource: any;

  ngOnInit() {
    this.agregaMateriales();
    this.agregarCategorias();
  }

  //-------Filtro de busqueda
  filtrar(event: Event) {
    let filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregarCategorias(): void{
    const promise = this.api.selectMaterialsCategories().then()
    promise.then((categories) => {
      // Se crea variable de referencia al elemento select
      const $select = document.getElementById("categoriasSelect");
      for (var category of categories) {
        // Se crea una option
        const opcion = document.createElement('option');
        const valor = category['CategoriaMaterial'];
        opcion.value = valor;
        opcion.text = valor;
        $select.appendChild(opcion);
      }
    });
  }

  agregaMateriales(): void {
    const promise = this.api.selectMaterialsInventory().then()
    promise.then((materiales) => {
      //console.log(JSON.stringify(data));
      for (var material of materiales) {

        this.inventario.push({
          Id: material['Id'], Codigo: material['Codigo'], Categoria: material['Categoria'],
          Descripcion: material['Descripcion'], Cantidad: material['Cantidad'],
          UnidadMedida: material['UnidadDeMedida'], PrecioCompra: material['PrecioCompra'],
          PrecioVenta: material['PrecioVenta'], FechaRegistro: material['FechaRegistro']
        });
        // console.log(material);
      }

      //Se realiza la carga en la tabla general html del inventario.
      const articulos = JSON.stringify(this.inventario);
      this.inventario = JSON.parse(articulos);
      this.dataSource = new MatTableDataSource(this.inventario);

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

  //------------------------------------------------------------//
  //-------             DETALLES MATERIAL               --------//
  //------------------------------------------------------------//

  openDialogMaterialDatails(j: number): void {
    let material: MaterialI = this.inventario[j];

    const dialogRef = this.dialog.open(PopupVerDetallesMaterialComponent, {
      width: '730px',
      data: material,
    });

    dialogRef.afterClosed().subscribe(customer => {
      console.log('The dialog was closed');
    });
  } // openDialogMaterialDatails

  //------------------------------------------------------------//
  //-------              EDITAR MATERIAL                --------//
  //------------------------------------------------------------//

  openDialogEditMaterial(j: number): void {
    let material: MaterialI = this.inventario[j];

    const dialogRef = this.dialog.open(PopupModificarMaterialComponent, {
      width: '730px',
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
      window.location.reload();
    });
  } // openDialogEditCustomer

  //------------------------------------------------------------//
  //-------            REGISTRAR MATERIAL               --------//
  //------------------------------------------------------------//

  openDialogAddMaterial(): void {
    let material: MaterialI;
    material = {Id: '', Codigo: '', Categoria: '',
               Descripcion: '',Cantidad: '', UnidadMedida: '',
               PrecioCompra: '', PrecioVenta: '', FechaRegistro: ''};

    const dialogRef = this.dialog.open(PopupRegistrarMaterialComponent, {
      width: '730px',
      data: material,
    });

    dialogRef.afterClosed().subscribe(material => {
      console.log('The dialog was closed');
      window.location.reload();
    });
  } // openDialogAddMaterial

  //------------------------------------------------------------//
  //-------             ELIMINAR MATERIAL               --------//
  //------------------------------------------------------------//

  openDialogDeleteMaterial(j: number): void {
    let material = this.inventario[j];
    let atributos: AdvertenciaI;
    atributos = {Pregunta: "¿Seguro que desea eliminar este material?", Dato: material.Codigo + ' - ' + material.Descripcion, IdDato: material.Id, Orden: 1};

    const dialogRef = this.dialog.open(PopupAdvertenciaComponent, {
      width: '500px',
      data: atributos
    });

    dialogRef.afterClosed().subscribe(correo => {
      console.log('The dialog was closed');
      window.location.reload();
    });
  } // openDialogDeleteMaterial

}
