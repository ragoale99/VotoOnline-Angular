import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './content/login/login.component';
import { ContentComponent } from './content/content.component';
import { GenericContentComponent } from './content/generic-content/generic-content.component';
import { AdminContentComponent } from './content/admin-content/admin-content.component';
import { FormVotazioneComponent } from './content/generic-content/form-votazione/form-votazione.component';
import { AddVotazioneComponent } from './content/admin-content/add-votazione/add-votazione.component';
import { NomeComponenteComponent } from './nome-componente/nome-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ContentComponent,
    GenericContentComponent,
    AdminContentComponent,
    FormVotazioneComponent,
    AddVotazioneComponent,
    NomeComponenteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
