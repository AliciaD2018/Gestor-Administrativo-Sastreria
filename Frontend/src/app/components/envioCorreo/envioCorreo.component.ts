import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  email: string;
  nombre: string;
}

@Component({
  selector: 'app-envioCorreo',
  templateUrl: './envioCorreo.component.html',
  styleUrls: ['./envioCorreo.component.css']   
})

export class EnvioCorreoComponent {
  nombre: string;
  email: string;

  constructor(public dialog: MatDialog) { }
  /*

  openDialog(): void {
    const dialogRef = this.dialog.open(Correo, {
      width: '250px',
      data: { nombre: this.nombre, email: this.email },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result;
    });
  }
  */
}


/*
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
*/