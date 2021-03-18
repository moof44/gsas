import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientDatatableComponent } from './tools/client-datatable/client-datatable.component';
import { ClientMaterialModule } from './modules/client-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ClientsComponent, ClientDatatableComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ClientMaterialModule,
    FlexLayoutModule
  ]
})
export class ClientsModule { }
