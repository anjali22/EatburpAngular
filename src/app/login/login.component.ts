import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [RestaurantService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fields: any;
  constructor(service: RestaurantService ) {
    this.fields = service.getFields();
  }

  ngOnInit() {
  }

}
