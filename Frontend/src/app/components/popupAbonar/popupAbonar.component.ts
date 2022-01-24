import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Abonos } from 'src/app/models/abono.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupAbonar',
  templateUrl: './popupAbonar.component.html',
  styleUrls: ['./popupAbonar.component.css']
})
export class PopupAbonarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupAbonarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Abonos,
    private api: ApiService
    ) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
