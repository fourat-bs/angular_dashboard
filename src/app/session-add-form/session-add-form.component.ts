import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemService: FakesessionitemService) {}
  ngOnInit() {
    
  }
  addSession(sessionItem: any) {
    this.sessionItemService.addSession(sessionItem.value.name,sessionItem.value.track,
      sessionItem.value.date,sessionItem.value.duree,sessionItem.value.adress,sessionItem.value.participants,sessionItem.value.participants==20)
    }

}
