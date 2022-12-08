import { Component, Input, OnInit } from '@angular/core';
import { Heroi } from 'src/app/Model/heroi.model';
import { HeroiService } from 'src/app/Services/heroi-service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-informacao-heroi',
  templateUrl: './informacao-heroi.component.html',
  styleUrls: ['./informacao-heroi.component.css']
})
export class InformacaoHeroiComponent implements OnInit {

  mostrar: boolean=  false;

  constructor(private heroiService: HeroiService) {}

  ngOnInit(): void {
  }
  @Input()heroi!: Heroi
  @Input()listherois!:Heroi[]

  deleteHeroi(id:any){
  this.heroiService.deleteHeroi(id)
  this.listherois.forEach((heroi,index,object)=>{
    if(heroi.id == id )
    object.splice(index,1);
    })
  }

  abrirModal(){
    this.mostrar =! this.mostrar
  }

}

