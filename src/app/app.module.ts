import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './modules/material.module';
//import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './main/login/login.component';
import { MainmenuComponent } from './main/mainmenu/mainmenu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './main/tools/header/header.component';
import { SidenavComponent } from './main/tools/sidenav/sidenav.component';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    MainmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
