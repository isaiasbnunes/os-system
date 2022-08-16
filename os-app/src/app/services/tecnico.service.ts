
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  url: string = environment.baseUrl + "/tecnico";

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar
    ){
  }

  findAll():Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(this.url);
  }

  create(tecnico: Tecnico):Observable<Tecnico>{
    return this.http.post<Tecnico>(this.url, tecnico);
  }

  message(msg: string):void{
    this.snack.open(msg,'ok',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
