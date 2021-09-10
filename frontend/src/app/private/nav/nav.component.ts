import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(
    private service: LoginService,
    private routes: Router) { }

  ngOnInit(): void {

  }

  onLogin(): boolean {
    return this.service.logein();
  }

  OnLogout(): void {
    this.service.loginOut();
    this.routes.navigate(['login']);
  }
}
