import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Model/cliente.model';
import { LoginService } from 'src/app/Services/login.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  LoginCliente = this.formBuilder.group({
    Nome:"",
    Senha:"",
  })


    SubmiCliente(){
    var cliente = this.LoginCliente.value
    if(cliente != null || cliente != undefined){
      var Token = this.Logar(cliente)
      this.test(Token)
      return Token
    }
    if(cliente == null){
      console.log("Usuario Ou senha Invalidos")
    }
  }
private test(token:any){

}

  Logar(cliente:object){
    this.loginservice.Login(cliente)
  }
}
