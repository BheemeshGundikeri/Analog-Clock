import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginvalidationComponent } from './loginvalidation/loginvalidation.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginvalidationComponent },
  { path: 'home', component: HomeComponent } // Define Home Page route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes{ }
