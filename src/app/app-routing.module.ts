import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './authentification/sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component:SignInComponent},
  {
    path: 'auth',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {path: '', redirectTo: '/signUp', pathMatch: 'prefix'},
  { path: '',   redirectTo: '/signIn', pathMatch: 'prefix' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
