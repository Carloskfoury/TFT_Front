import { Component, Input, OnInit } from '@angular/core';
import { HeroiService } from 'src/app/Services/heroi-service';
import { Heroi } from 'src/app/Model/heroi.model';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css']
})
export class HeroiComponent implements OnInit {
  constructor(private heroiService: HeroiService, private router : Router) { }

  herois!:Heroi[];
  HeroisSelecionados:Heroi[] = []

  ngOnInit(): void {
    this.showHeroi();
  }
  SelecionarHeroi(heroi:Heroi){

    if(this.HeroisSelecionados.includes(heroi)){
      this.HeroisSelecionados.splice(this.HeroisSelecionados.indexOf(heroi,1))
    }
    else{
      this.HeroisSelecionados?.push(heroi)
    }
  }

  test(){
    this.router.navigate(["/modificarHeroi"])
  }

  showHeroi(){
    return this.heroiService.getHerois().subscribe(data=>this.herois = data);
  }
  deleteHeroi(id:any){
      return this.heroiService.deleteHeroi(id)
  }
}
