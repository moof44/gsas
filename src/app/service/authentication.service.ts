import { Injectable } from '@angular/core';
//import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _isAuth:boolean=false;
  private _authChange= new Subject<boolean>();

  constructor(
      private fireAuth: AngularFireAuth
      ,private router: Router
    ) { 
    this.fireAuth.onAuthStateChanged(user=>{
      if(user){
        this._isAuth = true;
        // this.router.navigate(['/main']); // this will be the real landing page after login
        this.router.navigate(['/clients']);
        this._authChange.next(true);
        console.log("login: ", user);
      }else{
        this._isAuth = false;
        this.router.navigate(['/']);
        this._authChange.next(false);
        console.log("logout");
      }
    });
  }

  authLogin(email:string, password:string){
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(result=>{
        console.log("successfully logged in!");
      });
  }

  authLogout(){
    this.fireAuth.signOut()
      .then(()=>{
        console.log("successfully logged out!");
      });
  }

  public get isAuth(){
    return this._isAuth;
  }

  public get authChange(){
    return this._authChange;
  }

}