import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prendas } from 'src/app/models/prendas.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupPrendas',
  templateUrl: './popupPrendas.component.html',
  styleUrls: ['./popupPrendas.component.css']
})
export class PopupPrendasComponent implements OnInit {

 
  constructor(
    public dialogRef: MatDialogRef<PopupPrendasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Prendas,
    private api: ApiService
    ) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
