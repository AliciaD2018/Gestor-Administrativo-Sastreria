import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popupSeleccionarCliente',
  templateUrl: './popupSeleccionarCliente.component.html',
  styleUrls: ['./popupSeleccionarCliente.component.css']
})

export class PopupSeleccionarClienteComponent implements OnInit {

  displayedColumns: string[] = ['cedula', 'cliente', 'opciones'];
  dataSource = ELEMENT_DATA;
  checked=false;
  
  
  constructor(
    public dialogRef: MatDialogRef<PopupSeleccionarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData2
  ) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData2 {
  cedula: string;
  cliente: string;
}

const ELEMENT_DATA: DialogData2[] = [
  {cedula: '20222022', cliente: 'Alicia'},
  {cedula: '20222022', cliente: 'Jeffry'}
];


