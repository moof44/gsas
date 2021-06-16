import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { MainmenuComponent } from './main/mainmenu/mainmenu.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'main', component: MainmenuComponent },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule), canLoad:[AuthGuard], canActivate:[AuthGuard]/*, canActivateChild:[AuthGuard]*/}, // commenting this atm while coding
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canLoad:[AuthGuard], canActivate:[AuthGuard]/*, canActivateChild:[AuthGuard]*/},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
}) 
export class AppRoutingModule { }
