import { DialogComponent } from './../views/components/dialog/dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(titleDialog: string, msg: string){
    return this.dialog.open(DialogComponent,{
      width: '390px',
      disableClose: true,
      data:{
        title: titleDialog,
        message: msg
      }
    })
  }

}
