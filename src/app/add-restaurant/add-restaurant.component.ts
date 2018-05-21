import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  formName: String = 'Restaurant-Form';
  fields: any;
  constructor( private restaurantService: RestaurantService
  ) {
      this.fields = restaurantService.getFields();
     }

  ngOnInit() {
  }
}
