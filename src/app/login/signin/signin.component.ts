import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthSvcService } from 'src/app/common-svc/auth-svc.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private routes: Router,private authSvc:AuthSvcService) {

  }
  goToRegister() {
    this.routes.navigate(['login/sign-up']);
  }
  signIn() {
    this.authSvc.setLoginData(true);
    this.routes.navigate(['dashboard']);
  }
  goToHomePage() {
    this.routes.navigate(['home']);
  }

}
