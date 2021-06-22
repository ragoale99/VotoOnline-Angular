import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './content/login/login.component';
import { ContentComponent } from './content/content.component';
import { GenericContentComponent } from './content/generic-content/generic-content.component';
import { AdminContentComponent } from './content/admin-content/admin-content.component';
import { ModalComponent } from './header/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ContentComponent,
    GenericContentComponent,
    AdminContentComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, FormsModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
