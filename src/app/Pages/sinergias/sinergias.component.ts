import { Component, OnInit } from '@angular/core';
import { SinergiasService } from 'src/app/Services/sinergias-service';
import { Sinergias } from 'src/app/Model/sinergias.model';

@Component({
  selector: 'app-sinergias',
  templateUrl: './sinergias.component.html',
  styleUrls: ['./sinergias.component.css']
})
export class SinergiasComponent implements OnInit {

  constructor(private sinergiasService: SinergiasService) { }

  sinergias?: Sinergias [];

  ngOnInit(): void {
    this.showSinergia();
  }

  showSinergia(){
    return this.sinergiasService.getSinergias().subscribe(data => this.sinergias = data);
  }

  deleteSinergia(Id:any){
    return this.sinergiasService.deleteSinergia(Id)
  }
}
