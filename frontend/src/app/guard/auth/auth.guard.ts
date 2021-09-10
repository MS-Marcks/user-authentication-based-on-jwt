import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }
  canActivate(): boolean {
    if (this.loginService.logein()) {
      return true;
    } else {
      localStorage.clear();
      this.router.navigate(['login']);
      return false;
    }
  }
}
