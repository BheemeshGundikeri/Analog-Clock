import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  UserService = inject(UserService);

  User$ = this.UserService.getUsers();
}
