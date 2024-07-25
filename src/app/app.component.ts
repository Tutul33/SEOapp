import { Component } from '@angular/core';
import { AuthSvcService } from './common-svc/auth-svc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEOapp';
  constructor(private authSvc:AuthSvcService,private router:Router){
    this.router.url;
    console.log(this.router.url);
  }
  isAuthenticated() {
    try {
      return this.authSvc.getLoginData();
    } catch (error) {
      return error;
    }
  }
}
