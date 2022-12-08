import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { Heroi } from 'src/app/Model/heroi.model';
import { HeroiService } from 'src/app/Services/heroi-service';
import { ItensService } from 'src/app/Services/itens-service';
import { Itens } from 'src/app/Model/itens.model';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private heroiservice:HeroiService, private itensService:ItensService) { }

  NovoHeroi!: FormGroup
  itens?: Itens []

  ngOnInit(): void {
    this.NovoHeroi =  this.formBuilder.group({
      heroiNome: "",
      foto:"",
      estrela: 0,
      itens:[]
  })
  this.ShowItens()
}

  SubmitHeroi(){
    var HeroiForms = this.NovoHeroi.value
    var Heroi:Heroi | undefined;

      Heroi={
        heroiNome: HeroiForms.heroiNome,
        foto: HeroiForms.foto,
        estrela: HeroiForms.estrela,
        sinergias:[],
        itens: HeroiForms.itens
      }

      this.Post(Heroi)


    if (Heroi === null){
      console.warn("Não colocou o nome do Heroi.")
    }
  }

  Post(Heroi:Heroi){
   return this.heroiservice.postHeroi(Heroi)
  }

  ShowItens(){
    this.itensService.getItem().subscribe(data => this.itens = data);
  }
}
