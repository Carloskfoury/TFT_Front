import { Component,Input, OnInit,EventEmitter  } from '@angular/core';
import { HeroiService } from 'src/app/Services/heroi-service';
import { FormBuilder,FormControl,FormGroup,Validators  } from '@angular/forms';
import { Itens } from 'src/app/Model/itens.model';
import { Heroi } from 'src/app/Model/heroi.model';
import { ThisReceiver } from '@angular/compiler';
import { ItensService } from 'src/app/Services/itens-service';


@Component({
  selector: 'app-modificador-heroi',
  templateUrl: './modificador-heroi.component.html',
  styleUrls: ['./modificador-heroi.component.css']
})
export class ModificadorHeroiComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private heroiservice:HeroiService,private itenservice:ItensService) { }

  @Input()heroi!: Heroi

  @Input()mostrar!:boolean

  NovoHeroi!: FormGroup
  itens?: Itens []


  ngOnInit(): void {
    this.NovoHeroi = this.formBuilder.group({
      heroiNome: [null,[Validators.required]],
      foto:[null,[Validators.required]],
      estrela: 0,
      itens:[]
    })
    this.ShowItens()
  }


  SubmitHeroi(){
    var informacaoForms = this.NovoHeroi.value

    if(informacaoForms.heroiNome !="" || informacaoForms.foto != ""){
    var ModHeroi : Heroi = {
      heroiNome: informacaoForms.heroiNome,
      estrela: informacaoForms.estrela,
      foto: informacaoForms.foto,
      itens:[]
    }
    this.ModificarHeroi(ModHeroi,this.heroi.id)
    }

  }

  ModificarHeroi(heroi:Heroi,id:any){
    this.heroiservice.modificarHeroi(heroi,id)
  }

  ShowItens(){
    this.itenservice.getItem().subscribe(data => this.itens = data);
  }

  fecharModal(){
    this.mostrar =! this.mostrar

  }


}
