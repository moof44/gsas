import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientDatatableComponent } from './tools/client-datatable/client-datatable.component';
import { ClientMaterialModule } from './modules/client-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientProfileComponent } from './tools/client-profile/client-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { ClientEmployeesTableComponent } from './tools/client-employees-table/client-employees-table.component';
import { ClientEmployeesProfileComponent } from './tools/client-employees-profile/client-employees-profile.component';
import { AddClientComponent } from './tools/minor-tools/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SaveClientProfileComponent } from './tools/minor-tools/save-client-profile/save-client-profile.component';
import { ClientSecondaryComponent } from './tools/client-secondary/client-secondary.component';
export const options: Partial<IConfig> | (()=> Partial<IConfig>) | null = null ;


@NgModule({
  declarations: [
    ClientsComponent, 
    ClientDatatableComponent, 
    ClientProfileComponent, 
    HomeComponent, 
    CreateComponent, 
    ClientEmployeesTableComponent, 
    ClientEmployeesProfileComponent, AddClientComponent, SaveClientProfileComponent, ClientSecondaryComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ClientMaterialModule,
    FlexLayoutModule
    ,FormsModule
    ,ReactiveFormsModule
    ,NgxMaskModule.forRoot()
  ]
})
export class ClientsModule { }
