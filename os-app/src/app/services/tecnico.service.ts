
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  url: string = environment.baseUrl + "/tecnico";

  constructor(
    private http : HttpClient
    ){
  }

  findAll():Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(this.url);
  }

  findById(id: any):Observable<Tecnico>{
    return this.http.get<Tecnico>(this.url +"/"+ id);
  }

  create(tecnico: Tecnico):Observable<Tecnico>{
    return this.http.post<Tecnico>(this.url, tecnico);
  }

  update(tecnico: Tecnico):Observable<Tecnico>{
    return this.http.put<Tecnico>(this.url +'/'+ tecnico.id , tecnico);
  }

  delete(id: any){
    return this.http.delete<void>(this.url +'/'+id);
  }

}
