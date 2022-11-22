import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Sinergias } from '../Model/sinergias.model';

@Injectable({
  providedIn: 'root'
})
export class SinergiasService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:44392'

  getSinergias():Observable<any>{
    return this.http.get(this.url+"/api/Sinergias/GetSinergiaAsync")
  }

  postSinergia(sinergias:Sinergias){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.url+"/api/Sinergias",sinergias,({headers:headers})).subscribe(res => console.log(res))
   }

   deleteSinergia(Id:string){
      return this.http.delete(this.url+"/api/Sinergias/deleteByid/"+Id).subscribe(data => console.log(data))
   }
}
