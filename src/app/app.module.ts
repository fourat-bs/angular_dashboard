import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ForamteursComponent } from './foramteurs/foramteurs.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ParticipantComponent } from './participant/participant.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import {FakesessionitemService} from './fakesessionitem.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    AcceuilComponent,
    ForamteursComponent,
    AddFormateurComponent,
    AddParticipantComponent,
    SessionsComponent,
    ParticipantComponent,
    SessionItemComponent,
    SessionItemListComponent,
    SessionAddFormComponent,
    SessionEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FakesessionitemService
              
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

    