import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  session = {
    username: null,
    password: null,
  };

  constructor(
    private service: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.service.logein()) {
      this.router.navigate(['private']);
    }
  }

  onSubmit(): void {
    this.service.login(this.session).subscribe(
      (res: any) => {
        if (res.code === 200) {
          localStorage.setItem('token', res.message.token);
          this.router.navigate(['private']);
        }
      }, (err: any) => {
      }
    );
  }

}
