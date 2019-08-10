import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PictureService{
  url = 'http://localhost:3000';
  constructor(private http: HttpClient){}

  getAll(): Observable<any>{
    return this.http.get(this.url + '?_sort=id&_order=desc')
      //.map(response => response.json());
    
  }
}
export class DataService {

  constructor(private Http: HttpClient) { }

  getUsers(){
    return this.Http.get('https://reqres.in/api/users')
  }

  firstClick(){
    return console.log('clicked');
  }
}
