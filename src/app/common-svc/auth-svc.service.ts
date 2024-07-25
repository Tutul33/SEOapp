import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSvcService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.getInitialLoginState());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private storageSvc:StorageService) {
    this.setupAutoChecker();
  }
  private setupAutoChecker(): void {
    setInterval(() => {
      const isLoggedIn = this.getInitialLoginState();
      this.isLoggedInSubject.next(isLoggedIn);
    }, 1000*30); // Check every minute (adjust interval as needed)
  }
  private getInitialLoginState(): boolean {
    const isLoggedIn = this.storageSvc.getItem("isLoggedIn");
    return isLoggedIn === 'true';
  }

  setLoginData(isLoggedIn: boolean): void {
    this.storageSvc.setItem("isLoggedIn", String(isLoggedIn));
    this.isLoggedInSubject.next(isLoggedIn);
  }

  getLoginData(): boolean {
    return this.isLoggedInSubject.value;
  }
}
