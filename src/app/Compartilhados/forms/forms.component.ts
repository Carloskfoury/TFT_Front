import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { Heroi } from 'src/app/Model/heroi.model';
import { HeroiService } from 'src/app/Services/heroi-service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private heroiservice:HeroiService) { }

  ngOnInit(): void {
  }
   GrupoHeroi =  this.formBuilder.group({
    heroiNome: ""
  })

  SubmitHeroi(){
    console.log(this.GrupoHeroi.value)
    var HeroiNome = this.GrupoHeroi.value
    if(HeroiNome !=null || HeroiNome != undefined){

      this.Post(HeroiNome)

    }
    if (HeroiNome === null){
      console.warn("Não colocou o nome do Heroi.")
    }
  }

  Post(Nome:Object){
   return this.heroiservice.postHeroi(Nome)
  }
}
