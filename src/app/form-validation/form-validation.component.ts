import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  imports: [CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent implements OnInit {
togglePassword() {
throw new Error('Method not implemented.');
}
  cnfPassword: any;
isPasswordVisible: any;
  ngOnInit(): void {
    
  }


togglecnfpwd(){

}
}
