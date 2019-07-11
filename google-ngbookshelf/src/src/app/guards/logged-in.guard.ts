import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../core/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements  CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const loggedIn = this.userService.isLoggedIn();
      if (!loggedIn) {
      this.router.navigate(['/login']);
      }
      return loggedIn;
  }

  constructor(private router: Router, private userService: UsersService) {}


}
