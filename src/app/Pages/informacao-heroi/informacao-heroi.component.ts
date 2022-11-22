import { Component, Input, OnInit } from '@angular/core';
import { Heroi } from 'src/app/Model/heroi.model';


@Component({
  selector: 'app-informacao-heroi',
  templateUrl: './informacao-heroi.component.html',
  styleUrls: ['./informacao-heroi.component.css']
})
export class InformacaoHeroiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @Input()heroi!: Heroi


}
