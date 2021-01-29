import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakesessionitemService {
  Sessions= [
    {
    name: 'Web',
    track: 'MEAN',
    date: new Date('2018-06-13'),
    duree: 3,
    adress: 'Lyon',
    participants:4,
    isCompleted : false
    },
    {
    name: 'Mobile',
    track: 'Ionic',
    date: new Date('2018-08-10'),
    duree: 5,
    adress: 'Paris',
    participants: 5,
    isCompleted : false
    },
    {
    
    name: 'Web',
    track: 'NodeJS',
    date: new Date('2018-07/20'),
    duree: 5,
    adress: 'Lyon',
    participants: 0,
    isCompleted : false
    },
    {
        
        name: 'Web',
        track: 'Angular',
        date: new Date('2020-12/12'),
        duree: 5,
        adress: 'Tunis',
        participants: 20,
        isCompleted : true
        }
    ];
  constructor() { }
  getAllSessions(){return this.Sessions;}
  addSession(name:string,track:string,date:Date,duree:number,adress:string,
    participants:number,isCompleted:boolean) {
   const session = {name:name,track:track,date:date,duree:duree,adress:adress,
  participants:participants,isCompleted:isCompleted};
  this.Sessions.push(session);
    }

    delete(Session:any) {
      let index;
      index = this.Sessions.indexOf(Session);
      if (this.Sessions.indexOf(Session) >= 0) {
      this.Sessions.splice(index, 1);
      }
      }
      getNumSession(): number{ return this.Sessions.length;};
}
