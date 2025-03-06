import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from "./clock/clock.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  
}
