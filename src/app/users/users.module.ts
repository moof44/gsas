import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersHomeComponent } from './pages/users-home/users-home.component';
import { UsersProfileComponent } from './tools/users-profile/users-profile.component';
import { UsersMaterialModule } from './modules/users-material/users-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersDatatableComponent } from './tools/users-datatable/users-datatable.component';


@NgModule({
  declarations: [UsersComponent, UsersHomeComponent, UsersProfileComponent, UsersDatatableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersMaterialModule,
    FlexLayoutModule
  ]
})
export class UsersModule { }
