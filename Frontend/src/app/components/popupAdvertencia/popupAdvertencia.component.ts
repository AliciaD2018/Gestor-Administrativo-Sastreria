import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdvertenciaI } from 'src/app/models/advertencia.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { PopupEnviarEmailComponent } from '../popupEnviarEmail/popupEnviarEmail.component';

@Component({
  selector: 'app-popupAdvertencia',
  templateUrl: './popupAdvertencia.component.html',
  styleUrls: ['./popupAdvertencia.component.css']
})
export class PopupAdvertenciaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupEnviarEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdvertenciaI,
    private api: ApiService
    ) { }

  ngOnInit() {
    (<HTMLLabelElement>document.getElementById('pregunta')).innerText = this.data.Pregunta;
    (<HTMLLabelElement>document.getElementById('dato')).innerText = this.data.Dato;
    (<HTMLLabelElement>document.getElementById('titulo')).innerText = this.data.Titulo;
    let $boton1 = (<HTMLButtonElement>document.getElementById('boton1'));
    if (this.data.Boton1 == '') {
      $boton1.hidden;
    } else {
      $boton1.innerText = this.data.Boton1;
    }
    let $boton2 = (<HTMLButtonElement>document.getElementById('boton2'));
    if (this.data.Boton1 == '') {
      $boton2.hidden;
    } else {
      $boton2.innerText = this.data.Boton2;
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAceptClick(): void{
    if (this.data.Orden == 0) {
      this.api.deleteCustomer(parseInt(this.data.IdDato));
    }
    else if (this.data.Orden == 1) {
      this.api.deleteMaterial(parseInt(this.data.IdDato));
    }
  }
}
