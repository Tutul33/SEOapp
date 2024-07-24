import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private routes: Router) {

  }
  goToRegister() {
    this.routes.navigate(['login/sign-up']);
  }
  signIn() {
    this.routes.navigate(['dashboard']);
  }

}
