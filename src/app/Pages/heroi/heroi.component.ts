import { Component, Input, OnInit } from '@angular/core';
import { HeroiService } from 'src/app/Services/heroi-service';
import { Heroi } from 'src/app/Model/heroi.model';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';


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
  ngOnChanges(): void{
  }

  showHeroi(){
    this.heroiService.getHerois().subscribe(data=>this.herois = data);
  }
}
