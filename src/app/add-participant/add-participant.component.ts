import { Component, OnInit } from '@angular/core';
import { FackeParticpantServiceService } from '../facke-particpant-service.service';
@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  constructor(private participant:FackeParticpantServiceService) { }

  ngOnInit(): void {
  }
  add(f:any){
    this.participant.addParticipant(f.value.nom,  f.value.prenom, f.value.adresse, f.value.email, f.value.societe,  f.value.poste)  ;
    

  }

}
