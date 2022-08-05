import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthRoutingModule } from './authentification-routing.module';
import { AuthentificationComponent } from './authentification/authentification.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    AuthentificationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthentificationModule { }
