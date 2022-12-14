import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from '../private/dashboard/dashboard.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path : '',
   component: AuthentificationComponent,
   children: [
    {path: 'signIn', component: SignInComponent},
    {path: 'signUp', component: SignUpComponent}
  ]},
  {path: '**', component: PageNotFoundComponent}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }