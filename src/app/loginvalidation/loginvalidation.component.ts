import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginvalidation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule], 
  templateUrl: './loginvalidation.component.html',
  styleUrls: ['./loginvalidation.component.css']
})
export class LoginvalidationComponent {
  email: string = ''; 
  password: string = ''; 
  isPasswordVisible: boolean = false;
  errorMessage: string = '';

  // Hardcoded credentials
  private readonly validEmail = 'bheemeshgundikeri@gmail.com';
  private readonly validPassword = 'Bheemesh@123'; // Updated strong password

  // Strong password regex
  private readonly strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(private router: Router) {} 

  togglePassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit(): void {
    // Validate password strength
    if (!this.strongPasswordRegex.test(this.password)) {
      this.errorMessage = 'Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.';
      return;
    }

    // Check credentials
    if (this.email === this.validEmail && this.password === this.validPassword) {
      console.log('Login successful! Redirecting...');
      this.router.navigate(['/home']); // Redirect to home page
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
