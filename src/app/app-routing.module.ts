import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './common-svc/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:()=>import('./public/public.module').then(x=>x.PublicModule)
  },
  {
    path:'login',
    loadChildren:()=>import('./login/login.module').then(x=>x.LoginModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(x=>x.DashboardModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
