import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Router, RouterStateSnapshot, UrlSegmentGroup, UrlTree} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild{
    
    constructor(private authService:AuthenticationService, private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        // if(this.authService.isAuth){
        //     return true;
        // }else{
        //     this.router.navigate(['/']);
        //     return false;
        // }

        // if(this.authService.isAuth){
        //     return true
        // }else{
        //     const urlTree:UrlTree = this.router.parseUrl('/');
        //     return urlTree;
        // }
        console.log(this.authService.isAuth);
        return this.authService.isAuth;
    }

    canLoad(route:Route){
        // if(this.authService.isAuth){
        //     return true
        // }else{
        //     const urlTree:UrlTree = this.router.parseUrl('/');
        //     return urlTree;
        // }
        console.log(this.authService.isAuth);
        return this.authService.isAuth;
    }

    canActivateChild(childRoute:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authService.isAuth){
            return true
        }else{
            const urlTree:UrlTree = this.router.parseUrl('/');
            return urlTree;
        }
    }
}