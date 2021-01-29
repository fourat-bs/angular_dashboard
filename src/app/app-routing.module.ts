import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { ForamteursComponent } from './foramteurs/foramteurs.component';
import { ParticipantComponent } from './participant/participant.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { SessionsComponent } from './sessions/sessions.component';



const routes: Routes = [{
  path:'' ,
  component:AcceuilComponent 
},{
  path:'foramteur',
  component:ForamteursComponent
},{
  path:'participant',
  component:ParticipantComponent
},{
  path:'add-formateur',
  component:AddFormateurComponent

},{
  path:'session' ,
  component:SessionsComponent 
},{
  path:'add-participant',
  component:AddParticipantComponent

},{
  path:'add-session',
  component:SessionAddFormComponent

},{
  path:'edit-session',
  component:SessionEditFormComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
