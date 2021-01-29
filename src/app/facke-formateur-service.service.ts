import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FackeFormateurServiceService {
  getNumFormateur(): number {
    return this.Formateurs.length;
  }
  Formateurs=[{
    name:"ben salah",
    prenom:"fourat",
    adresse:"zarzis",
    email:"fourat@gmail.com",
    domaine:'angular'
  
  
  },
  {
  name:"sahli",
  prenom:"moahmed",
  adresse:"Hammamet",
  email:"sahli.med007@gmail.com",
  domaine:'java'
  
  },
  {
  name:"salah",
  prenom:"mohamed",
  adresse:"bizerte",
  email:"slah@gmail.com",
  domaine:'java script'
  
  }];
  constructor() { }
  getAllFormateurs(){
    return this.Formateurs ;}

  addFormateurs(name: string,prenom: string,adresse: string,email: string,domaine:string){
    const formateur={ name: name, prenom: prenom, adresse: adresse, email: email, domaine:domaine };
   this.Formateurs.push(formateur);

 }
 deleteFormateurs(formateur:any){
   let index=this.Formateurs.indexOf(formateur);
   this.Formateurs.splice(index,1);
 }

}
