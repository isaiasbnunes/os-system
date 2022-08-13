
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  url: string = environment.baseUrl;

  constructor(private http : HttpClient) {
  }

  findAll():Observable<Tecnico[]>{
    const url = this.url + "/tecnico";
    return this.http.get<Tecnico[]>("http://localhost:8080/tecnico");
  }

}
