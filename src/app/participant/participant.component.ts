import { Component, OnInit } from '@angular/core';
import { FackeParticpantServiceService } from '../facke-particpant-service.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  
  ParticipantList: { name: string; prenom: string; adresse: string; email: string; societe: string; poste: number; }[]
 
  constructor(private Parts:FackeParticpantServiceService) { 
    this.ParticipantList=this.Parts.getAllParticipant();
  }

  ngOnInit(): void {
    
  }
  delete(participant:any){
    this.Parts.deleteParticipant(participant);
  }


}
