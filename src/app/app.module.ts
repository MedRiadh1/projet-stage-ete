import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthentificationModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCm1pfy-ohtCHq1ngIeZt9pjKtc9_2opUk",
      authDomain: "stage-ete-6edd7.firebaseapp.com",
      projectId: "stage-ete-6edd7",
      storageBucket: "stage-ete-6edd7.appspot.com",
      messagingSenderId: "865771940819",
      appId: "1:865771940819:web:4c5cec56e777cbf1965d26"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
