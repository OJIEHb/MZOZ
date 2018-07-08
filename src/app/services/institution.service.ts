import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Institution } from '../models/institution';

@Injectable()
export class InstitutionService {

  private institutionPath: string = '/institutions';

  private institutions: AngularFireList <Institution> = null;

  constructor(private db: AngularFireDatabase) {
    this.institutions = db.list(this.institutionPath);
  }

  public addInstitution(customer: Institution): void {
    this.institutions.push(customer);
  }

  getInstitutions(): AngularFireList<Institution> {
    return this.institutions;
  }
}
