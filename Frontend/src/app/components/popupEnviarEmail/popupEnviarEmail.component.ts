import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailI } from 'src/app/models/email.interface';

@Component({
  selector: 'app-popupEnviarEmail',
  templateUrl: './popupEnviarEmail.component.html',
  styleUrls: ['./popupEnviarEmail.component.css']
})
export class PopupEnviarEmailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupEnviarEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmailI
  ) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}