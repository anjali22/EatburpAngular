import { Component, OnInit } from '@angular/core';

import { FoodItemService} from '../services/food-item.service';
import { Menu } from '../models/menu-item-fields';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  formName: String = 'Menu-Item-Form';
  public fields: any[];
  constructor(private foodItemService: FoodItemService) {
    this.fields = foodItemService.getMenuFields();
  }
  ngOnInit() {
  }

}
