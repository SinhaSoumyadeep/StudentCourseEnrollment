import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {

  constructor(private service: UserServiceClient) {}
  user: '';
  isLoggedIn;

  ngOnInit() {
    this.service.profile().then(user => {
      this.user = user;
      if(user.username != '')
      {
        this.isLoggedIn = true;
      }
    })
  }

}
