import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSvcService } from 'src/app/common-svc/auth-svc.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router,private authSvc:AuthSvcService){

  }
logOut() {
  this.authSvc.setLoginData(false);
 this.router.navigate(['login']);
}

}
