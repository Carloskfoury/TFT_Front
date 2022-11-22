import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { SinergiasService } from '../../Services/sinergias-service';


@Component({
  selector: 'app-forms-sinergias',
  templateUrl: './forms-sinergias.component.html',
  styleUrls: ['./forms-sinergias.component.css']
})
export class FormsSinergiasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private sinergiaService:SinergiasService) { }

  ngOnInit(): void {
  }

  GrupSinergias = this.formBuilder.group({
    sinergiaNome: '',
    sinergiaBuff:''
})


SubmitSinergia(){
  var Sinergia = this.GrupSinergias.value

  if(Sinergia != null || Sinergia != undefined ){
    this.Post(Sinergia)
  }
  if(Sinergia == null){
    console.log("Não Colocou nenhuma sinergia")
    }
  }

Post(sinergias:Object){
  return this.sinergiaService.postSinergia(sinergias)
  }
}
