import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
// import { LoginComponent } from './login/login/login.component';
// import { RegisterComponent } from './login/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: MapComponent
  },
  {
    path: 'minara',
    component: MapComponent
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  {
    path: '**',
    redirectTo: '/minara'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
