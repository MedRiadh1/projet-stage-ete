import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AddTodoComponent } from './shared/add-todo/add-todo.component';
import { EditComponent } from './shared/edit/edit.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  
  },
  {path: '',   redirectTo: '/signIn', pathMatch: 'full' },
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path :'addtodo', component: AddTodoComponent},
  {path: 'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }