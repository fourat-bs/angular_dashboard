import { Component, OnInit } from '@angular/core';
import { FackeFormateurServiceService } from '../facke-formateur-service.service';
import { FackeParticpantServiceService } from '../facke-particpant-service.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  NumPart:number=0;
  NumFormateur:number=0;
  constructor(private participant:FackeParticpantServiceService,private formateur:FackeFormateurServiceService) {
    this.NumPart=this.participant.getNumParticipant();
    this.NumFormateur=this.formateur.getNumFormateur();
   }

  ngOnInit(): void {
  }
 
}
