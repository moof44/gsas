import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashInOutComponent } from './pages/cash-in-out/cash-in-out.component';
import { UsersHomeComponent } from './pages/users-home/users-home.component';

const routes: Routes = [
  { path: '', component: UsersHomeComponent },
  { path: 'cash-in-out', component: CashInOutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
