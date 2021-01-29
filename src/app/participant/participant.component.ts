import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  

  Participants = [
    {
      name:"ben salah",
      prenom:"fourat",
      adresse:"zarzis",
      


  },
  {
    name:"sahli",
    prenom:"moahmed",
    adresse:"Hammamet",


  },
  {
    name:"salah",
    prenom:"mohamed",
    adresse:"bizerte",
  

  }];
  constructor() { }

  ngOnInit(): void {
  }

}
