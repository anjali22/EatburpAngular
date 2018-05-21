import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token')) {
            console.log('user is logged in');
            return true;
        } else {
            console.log('Please login/signup to continue.');
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    }
}
