import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarMessageService {

  constructor(
    private snack: MatSnackBar
  ) { }

  message(msg: string):void{
    this.snack.open(msg,'ok',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}
