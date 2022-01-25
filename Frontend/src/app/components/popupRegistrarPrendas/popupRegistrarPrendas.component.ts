import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrendasI } from 'src/app/models/prendas.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupRegistrarPrendas',
  templateUrl: './popupRegistrarPrendas.component.html',
  styleUrls: ['./popupRegistrarPrendas.component.css']
})
export class PopupRegistrarPrendasComponent implements OnInit {
  selectedValue: string;

  constructor(
    public dialogRef: MatDialogRef<PopupRegistrarPrendasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PrendasI,
    private api: ApiService
    ) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  
}
