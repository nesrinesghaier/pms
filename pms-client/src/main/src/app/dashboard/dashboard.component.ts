import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {Project} from '../../../models/project';
import {User} from '../../../models/user';

@Component({
  selector: 'pms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private userservice: UserService) {
  }
  ngOnInit() {
  const u = new User ( 551, 'aaa', 'rrr', 'ameni@gmail.com', 'darna', Array<any>());
  this.userservice.deleteUser(u).subscribe((data) => {
  console.log(data);
}, error => {
  console.log(error);
});

  this.userservice.getUserResources(553).subscribe( (data) => console.log(data)); }
}
