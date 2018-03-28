import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RestaurantBase } from '../restaurant-base';
import { RestaurantControlService } from '../services/restaurant-field.service';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurant';
import { FoodItemService } from '../services/food-item.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: RestaurantBase<any>[] = [];
  @Input() formName: string;
  form: FormGroup;
  myFiles: string[] = [];

  constructor(
    private fieldService: RestaurantControlService,
    private restaurantService: RestaurantService,
    private foodItemService: FoodItemService) { }

  ngOnInit() {
    this.form = this.fieldService.toFormGroup(this.fields);

  }
  getFileDetails(e) {
    // console.log (e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
     console.log('myFiles---------', this.myFiles);
  }

  formValue() {
    const frmData = new FormData();
    const formValue = this.form.value;
    const controls = this.form.controls;
    for (const prop in controls) {
      if (controls.hasOwnProperty(prop)) {
        for ( const valueProp in formValue) {
          if (valueProp === prop) {
            const collection = this.form.value[valueProp];
            if (collection.includes(',')) {
              const allValues = collection.split(',');
              for (let i = 0; i < allValues.length; i++) {
                frmData.append(prop, allValues[i] );
              }
            } else {
              frmData.append(prop, this.form.value[valueProp]);
            }
          }
        }
      }
    }
    for (let i = 0; i < this.myFiles.length; i++) {
      frmData.append('photo', this.myFiles[i]);
    }
    switch (this.formName) {
      case 'Restaurant-Form':
        this.restaurantService.addRestaurant(frmData).subscribe(
          data => {
            console.log('data-------------', data);
          }
        );
        break;

      case 'Food-Item-Form':
        this.foodItemService.addFoodItem(frmData).subscribe(
          data => {
            console.log('data------------', data);
          }
        );
        break;

      default:
        break;
    }
  }

  onSubmit() {
    this.formValue();
  }
}
