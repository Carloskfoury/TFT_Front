import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../Model/cliente.model';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:44392'

  novoUsuario(cliente:Cliente){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(this.url+"/api/Login",cliente,({headers:headers})).subscribe(res => console.log(res))
  }
  Login(cliente:Cliente){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(this.url+"/api/Login/Login",cliente,({headers:headers})).subscribe(res =>console.log(res))
  }
}
