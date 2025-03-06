import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [

  {path:"clock", component:ClockComponent},
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
