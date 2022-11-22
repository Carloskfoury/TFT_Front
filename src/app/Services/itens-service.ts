import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Itens } from '../Model/itens.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:44392'

  getItem():Observable<any>{
    return this.http.get(this.url+"/api/Itens/GetItemAsync")
  }

  postItem(item:Itens){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post(this.url+"/api/Itens",item,({headers:headers})).subscribe(res => console.log(res))
  }
  deleteItem(Id:String){
    return this.http.delete(this.url+"/api/Itens/deleteByid/"+Id).subscribe(data => console.log(data))
   }
}
