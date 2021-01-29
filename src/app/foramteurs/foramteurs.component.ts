import { Component, OnInit } from '@angular/core';
import { FackeFormateurServiceService } from '../facke-formateur-service.service';
@Component({
  selector: 'app-foramteurs',
  templateUrl: './foramteurs.component.html',
  styleUrls: ['./foramteurs.component.css']
})
export class ForamteursComponent implements OnInit {

  formateurList: { name: string; prenom: string; adresse: string; email: string; domaine: string; }[] ;
  constructor(private formateur:FackeFormateurServiceService ) 

  { 
    this.formateurList=this.formateur.getAllFormateurs();
  
  }


  ngOnInit(): void {
  }
  delete(formateur:any){
    this.formateur.deleteFormateurs(formateur);
  }

}
