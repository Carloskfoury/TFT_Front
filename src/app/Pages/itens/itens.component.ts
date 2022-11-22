import { Component, OnInit } from '@angular/core';
import { ItensService } from 'src/app/Services/itens-service';
import { Itens } from 'src/app/Model/itens.model';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  constructor(private itensService : ItensService) { }

  itens?: Itens []

  ngOnInit(): void {
    this.showIten();
  }

  showIten(){
    return this.itensService.getItem().subscribe(data => this.itens = data);
  }

  deleteItem(id:any){
    return this.itensService.deleteItem(id)
  }
}
