import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CardComponent } from './shared/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    NavBarComponent,
    CardComponent
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
    }),
    AngularFirestoreModule
  ],
  providers: [FirebaseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
