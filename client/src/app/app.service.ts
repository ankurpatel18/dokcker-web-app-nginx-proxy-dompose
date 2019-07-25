import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private getBooksUrl = '';

  constructor( private http: HttpClient) {
    this.getBooksUrl = environment.API_URL + '/books';
   }

  getBooks (): Observable<any[]> {
    return this.http.get<any[]>(this.getBooksUrl);
  }

}
