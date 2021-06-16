import { Component, OnDestroy, OnInit} from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import {Observable, Subject, Subscription} from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth:boolean=false;
  authSubscription: Subscription | undefined;

  constructor(private authService:AuthenticationService) { 
    this.authSubscription = this.authService.authChange.subscribe(authStatus=>{
      this.isAuth = authStatus;
      //console.log(this.isAuth); 
      this.isAuth = true;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.authSubscription?.unsubscribe();
  }

  logout(){
    this.authService.authLogout();
  }
}
