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
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAceptClick(): void{
    if (this.data.Orden == 0) {
      this.api.deleteCustomer(parseInt(this.data.IdDato));
    }
  }
}
