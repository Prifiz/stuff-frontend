import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stuff } from '../model/stuff';
import { Observable, of } from 'rxjs';
import { NoIdStuff } from '../model/no-id-stuff';

@Injectable({
  providedIn: 'root'
})
export class StuffService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) {
  }

  getAllStuff(): Observable<Stuff[]> {
    return this.http.get<Stuff[]>('http://localhost:8080/api/v1/stuff')
  }

  createStuff(stuff: NoIdStuff): void {
    this.http.post('http://localhost:8080/api/v1/stuff/createExtended', stuff, {responseType: 'text'}).subscribe()
  }

  deleteStuff(stuff: Stuff): void {
    this.http.delete(`http://localhost:8080/api/v1/stuff/${stuff.id}`, {responseType: 'text'}).subscribe()
  }
}
