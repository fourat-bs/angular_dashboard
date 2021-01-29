import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FackeParticpantServiceService {
 
  Participants = [
    {
      name:"ben salah",
      prenom:"fourat",
      adresse:"zarzis",
      email:"foufou@gmail.com",
      societe:"vermeg",
      poste:1


  },
  {
    name:"sahli",
    prenom:"moahmed",
    adresse:"Hammamet",
    email:"sahli.med007@gmail.com",
    societe:"sofrecam",
    poste:2

  },
  {
    name:"salah",
    prenom:"mohamed",
    adresse:"bizerte",
    email:"slah@gmail.com",
    societe:"b2m",
    poste:3

  }];
  

  constructor() {}
  getAllParticipant(){
    return this.Participants ;
  }
  addParticipant(name: string,prenom: string,adresse: string,email: string,societe: string,poste: number){
     const participant={ name: name, prenom: prenom, adresse: adresse, email: email, societe: societe, poste: poste };
    this.Participants.push(participant);

  }
  deleteParticipant(participant:any){
    let index=this.Participants.indexOf(participant);
    this.Participants.splice(index,1);
  }
  getNumParticipant(): number {
    return this.Participants.length;
  }
 

  /*ModifierParticipant(participant:any,){
    let index=this.Participants.indexOf(participant);
    this.Participants.splice(index,1);
  }*/
}
