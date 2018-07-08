import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../../services/institution.service';
import { Institution } from '../../models/institution';

@Component({
  selector: 'add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['./add-institution.component.css']
})
export class AddInstitutionComponent {
  
  institution: Institution = new Institution();

  constructor(private institutionService: InstitutionService) { }

  public saveInstitution() {
    console.log(this.institution);
    this.institutionService.addInstitution(this.institution);
    this.institution = new Institution();
  }

}
