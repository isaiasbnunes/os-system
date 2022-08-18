import { Observable } from 'rxjs';
import { Cliente } from './../models/cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = environment.baseUrl + "/cliente";

  constructor(
    private http : HttpClient
  ) { }

  findAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  findById(id: any):Observable<Cliente>{
    return this.http.get<Cliente>(this.url +"/"+ id);
  }

  create(c: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, c);
  }

  update(c: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url +'/'+ c.id , c);
  }

  delete(id: any){
    return this.http.delete<void>(this.url +'/'+id);
  }
}
