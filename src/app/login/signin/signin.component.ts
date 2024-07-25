import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthSvcService } from 'src/app/common-svc/auth-svc.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private router: Router, private authSvc: AuthSvcService) {
    console.log(this.router.url)
  }
  goToRegister() {
    this.router.navigate(['login/sign-up']);
  }
  signIn() {
    this.authSvc.setLoginData(true);
    this.router.navigate(['dashboard']);
  }
  goToHomePage() {
    this.router.navigate(['home']);
  }

}
