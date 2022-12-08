import { Component, OnInit,Output } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/Model/cliente.model';
import { LoginComponent } from 'src/app/Pages/login/login.component';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-forms-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.css']
})
export class FormsLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  GrupCliente = this.formBuilder.group({
    Nome:"",
    Senha:"",
    Role:"",
    Id:"",
  })


  SubmiCliente(){
    var cliente = this.GrupCliente.value
    cliente.Role = "Usuario"
    if(cliente != null || cliente != undefined){
      this.Post(cliente)
    }
    if(cliente ==null){
      console.log("Não informou os dados do CLiente")
    }
  }



  Post(cliente:object){
    return this.loginService.novoUsuario(cliente)
  }
}
