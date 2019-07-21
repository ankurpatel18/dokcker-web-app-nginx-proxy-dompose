import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private getBooksUrl = 'http://localhost/books'

  constructor( private http: HttpClient, private env:EnvService) {
    if(env.apiUrl != null){
      this.getBooksUrl = env.apiUrl + '/books';
    }
   }

  getBooks (): Observable<any[]> {
    return this.http.get<any[]>(this.getBooksUrl);
  }

}
