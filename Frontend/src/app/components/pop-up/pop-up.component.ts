import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  email: string;
  nombre: string;
}

export interface DialogData2 {
  cedula: string;
  cliente: string;
}
const ELEMENT_DATA: DialogData2[] = [
  {cedula: '20222022', cliente: 'Alicia'}
];

@Component({
  selector: 'app-pop-up',
  templateUrl: 'pop-up.component.html',
  // styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  nombre: string;
  email: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { nombre: this.nombre, email: this.email },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//------------------------------------------------------------------------------------
//-------------------------           Correo         ---------------------------------
//------------------------------------------------------------------------------------

@Component({
  selector: 'correo',
  templateUrl: 'correo.html',
})

export class Correo{
  constructor(
    public dialogRef: MatDialogRef<Correo>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


//------------------------------------------------------------------------------------
//------------------------------------Selecciona Cliente---------------------------------
//------------------------------------------------------------------------------------

@Component({
  selector: 'seleccionaCliente',
  templateUrl: 'seleccionaCliente.html',
})

export class SeleccionaCliente {
  displayedColumns: string[] = ['cedula', 'cliente'];
  dataSource = ELEMENT_DATA;
  
  constructor(
    public dialogRef: MatDialogRef<SeleccionaCliente>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData2
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
