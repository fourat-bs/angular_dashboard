import { Component, OnInit } from '@angular/core';
import { FackeFormateurServiceService } from '../facke-formateur-service.service';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  constructor(private formateur:FackeFormateurServiceService) { }

  ngOnInit(): void {
  }
  add(f:any){
    this.formateur.addFormateurs(f.value.nom,  f.value.prenom, f.value.adresse, f.value.email, f.domaine);
  
  }

}
