import { Component, OnDestroy } from '@angular/core';
import { AuthSvcService } from './common-svc/auth-svc.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'SEOapp';
  isLoginPage: boolean = false;
  isAuthenticated:boolean=false;
  private authSubscription: Subscription = new Subscription();
  constructor(private authSvc: AuthSvcService, private router: Router) {

    const currentUrl = this.router.url;
    if (currentUrl == '/login') {
      this.isLoginPage = true;
    }else{
      this.isLoginPage = false;
    }
    this.authSubscription = this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {       
       this.isAuthenticated=isLoggedIn;
    });
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  getAuthenticated(){
    return this.isAuthenticated;
  }
  
  isInLoginPage() {
    try {
      if (this.isLoginPage) {
        this.authSvc.setLoginData(false);
      }
      return this.isLoginPage;
    } catch (error) {
      return false;
    }
  }
}
