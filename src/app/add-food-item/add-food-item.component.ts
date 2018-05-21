import { Component, OnInit } from '@angular/core';

import { FoodItemService } from '../services/food-item.service';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent implements OnInit {
  formName: String = 'Food-Item-Form';
  fields: any;
  constructor( private foodItemService: FoodItemService) {
    this.fields = foodItemService.getFields();
  }

  ngOnInit() {
  }

}
