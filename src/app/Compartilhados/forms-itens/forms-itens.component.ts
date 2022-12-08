import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { ItensService } from 'src/app/Services/itens-service';
import { Itens } from 'src/app/Model/itens.model';

@Component({
  selector: 'app-forms-itens',
  templateUrl: './forms-itens.component.html',
  styleUrls: ['./forms-itens.component.css']
})
export class FormsItensComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private itensService: ItensService) { }

  ngOnInit(): void {
  }
     GrupItens =this.formBuilder.group({
      itensNome: '',
      itensAtributos:''
    })

  SubmitIten(){

   var Item = this.GrupItens.value

   if (Item != null || Item != undefined){
    this.Post(Item)
   }
   if(Item == null){
    console.log("Não colocou Item")
   }
  }
  Post(Item:Object){
    return this.itensService.postItem(Item)
  }
}
