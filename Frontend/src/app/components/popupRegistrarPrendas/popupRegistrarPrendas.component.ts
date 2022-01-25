import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prendas } from 'src/app/models/prendas.interface';
import { ApiService } from 'src/app/services/api/api.service';


interface PrendasSelect {
  value: string;
  viewValue: string;
  
}

@Component({
  selector: 'app-popupRegistrarPrendas',
  templateUrl: './popupRegistrarPrendas.component.html',
  styleUrls: ['./popupRegistrarPrendas.component.css']
})
export class PopupRegistrarPrendasComponent implements OnInit {
  selectedValue: string;

  constructor(
    public dialogRef: MatDialogRef<PopupRegistrarPrendasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Prendas,
    private api: ApiService
    ) { }

  ngOnInit() {
  }
/*   Fecha: string,
  MontoAbono: string,
  SaldoAnterior: string,
  NuevoSaldo: string,
  Anotaciones: string */

  prenda: Prendas[] = [
    {Fecha: 'fechis', MontoAbono: '1500',SaldoAnterior: '5000', NuevoSaldo: '3500',Anotaciones: 'pantalon azul'},
    {Fecha: 'fechis', MontoAbono: '1500',SaldoAnterior: '5000', NuevoSaldo: '3500',Anotaciones: 'pantalon negro'},
    {Fecha: 'fechis', MontoAbono: '1500',SaldoAnterior: '5000', NuevoSaldo: '3500',Anotaciones: 'pantalon turquesa'},
  ];

  onCancelClick(): void {
    this.dialogRef.close();
  }

  
}
