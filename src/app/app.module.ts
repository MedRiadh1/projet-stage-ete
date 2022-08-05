import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification/authentification.component';
@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthentificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
