import { Component } from '@angular/core';
import { AuthSvcService } from './common-svc/auth-svc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEOapp';
  constructor(private authSvc:AuthSvcService){

  }
  isAuthenticated() {
    try {
      return this.authSvc.getLoginData();
    } catch (error) {
      return error;
    }
  }
}
