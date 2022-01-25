import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbonoI } from 'src/app/models/abono.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupAbonar',
  templateUrl: './popupAbonar.component.html',
  styleUrls: ['./popupAbonar.component.css']
})
export class PopupAbonarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupAbonarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AbonoI,
    private api: ApiService
    ) { }

  ngOnInit() {
    let titulo = (<HTMLLabelElement>document.getElementById('titulo')).innerText;
    (<HTMLLabelElement>document.getElementById('titulo')).innerText = titulo + ' ' + this.data.IdOrden;
    this.obtenerFecha();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  obtenerFecha(){
    let fechaHoy = new Date().toISOString().substring(0,10);
    let year = fechaHoy.substring(0,4);
    let mes = fechaHoy.substring(5,7);
    let dia = fechaHoy.substring(8);
    let fecha = dia + '/' + mes + '/' + year;
    this.data.FechaAbono = fecha;
  }

  calcularNuevoSaldo(evento: any){
    if (this.data.SaldoAnterior >= this.data.MontoAbono ) {
      this.data.NuevoSaldo = (parseInt(this.data.SaldoAnterior) - parseInt(this.data.MontoAbono)).toString();
    } else {
      this.data.NuevoSaldo = 'Abono supera monto adeudado!';
    }
  }

  insertarAbono(){
    if (this.data.SaldoAnterior >= this.data.MontoAbono ){
      
    }
  }

}
