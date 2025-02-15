import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-eddituser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eddituser.component.html',
  styleUrl: './eddituser.component.css'
})
export class EddituserComponent {
  User$!: Observable<any> | undefined;

  constructor(private UserService:UserService){}

  @Input() set id(userId:String){
    //set user id of that id
      this.User$ = this.UserService.getUserByID(+userId);
      console.log(this.User$);
  }
}
