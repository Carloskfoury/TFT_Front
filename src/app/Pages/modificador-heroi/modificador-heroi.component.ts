import { Component,Input, OnInit } from '@angular/core';
import { HeroiService } from 'src/app/Services/heroi-service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { Itens } from 'src/app/Model/itens.model';
import { Heroi } from 'src/app/Model/heroi.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-modificador-heroi',
  templateUrl: './modificador-heroi.component.html',
  styleUrls: ['./modificador-heroi.component.css']
})
export class ModificadorHeroiComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private heroiservice:HeroiService) { }

  @Input()heroi!: Heroi

  ngOnInit(): void {
  }

  NovoHeroi = this.formBuilder.group({
    heroiNome: "",
  })

  SubmitHeroi(){
    var novoHeroi = new Heroi

    novoHeroi.heroiNome = JSON.stringify(this.NovoHeroi.value)
    novoHeroi.id = this.heroi.id
    novoHeroi.itens = this.heroi.itens
    novoHeroi.sinergias = this.heroi.sinergias

    console.log(typeof(novoHeroi),"aqui")

    console.log(novoHeroi)
    if(novoHeroi != undefined){
      this.ModificarHeroi(novoHeroi,this.heroi.id)
    }
    if(novoHeroi == null){
      console.warn("Não Colocou o nome do Heroi.")
    }
  }

  ModificarHeroi(heroi:Heroi,id:any){
    this.heroiservice.modificarHeroi(heroi,id)
  }
}
