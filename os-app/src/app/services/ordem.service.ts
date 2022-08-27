import { Ordem } from './../models/ordem';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {
  url: string = environment.baseUrl + "/os";

  constructor(
    private http : HttpClient
  ) { }

  findAll():Observable<Ordem[]>{
    return this.http.get<Ordem[]>(this.url);
  }

  findById(id: any):Observable<Ordem>{
    return this.http.get<Ordem>(this.url +"/"+ id);
  }

  create(o: Ordem):Observable<Ordem>{
    return this.http.post<Ordem>(this.url, o);
  }

  update(c: Ordem):Observable<Ordem>{
    return this.http.put<Ordem>(this.url, c);
  }

  delete(id: any){
    return this.http.delete<void>(this.url +'/'+id);
  }
}
