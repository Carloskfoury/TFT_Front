import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Heroi } from '../Model/heroi.model';
import { HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  constructor(private http: HttpClient) {

   }
   url = 'https://localhost:44392'

   getHerois():Observable<any>{
     return this.http.get(this.url+"/api/Heroi/GetHeroiAsync")
   }

   postHeroi(Nome:object){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.url+"/api/Heroi",Nome,({headers:headers})).subscribe(res => console.log(res))
   }

   deleteHeroi(Id:String){
    return this.http.delete(this.url+"/api/Heroi/deleteByid/"+Id).subscribe(data => console.log(data))
   }

   modificarHeroi(Heroi:Object,id:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.url+"/api/Heroi/updateHeroi/"+id,Heroi,{headers}).subscribe(data => console.log(data))
   }
}
