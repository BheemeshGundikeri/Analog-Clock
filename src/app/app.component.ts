import { Component } from '@angular/core';
//import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClockComponent } from "./clock/clock.component";
// import { LoginvalidationComponent } from "./loginvalidation/loginvalidation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    // RouterLink, 
    // RouterLinkActive, 
    CommonModule,
    ClockComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ Fixed typo: changed 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'my-angular-app';
}
              