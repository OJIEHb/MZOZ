import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddInstitutionComponent } from './components/add-institution/add-institution.component';
import { InstitutionService } from './services/institution.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    DashboardComponent,
    AddInstitutionComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        { path: '',
          component: DashboardComponent
        },
        {
          path: 'add-institution',
          component: AddInstitutionComponent
        }
      ]
    ),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [InstitutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

