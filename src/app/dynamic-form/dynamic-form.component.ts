import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

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
  geoLocation;
  constructor(
    private fieldService: RestaurantControlService,
    private restaurantService: RestaurantService,
    private foodItemService: FoodItemService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fieldService.toFormGroup(this.fields);
    const options = {
      enableHighAccuracy: true};
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          // this.showPosition(position);
          console.log('geolocation----------', position);
          this.geoLocation = position;
        }, (error) => {
          console.log(error);
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }

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
    const formValue = this.form.value.inputFields[0];
    for ( const valueProp in formValue) {
      if (valueProp) {
        const collection = this.form.value.inputFields[0][valueProp];
        if (collection && collection.includes(',')) {
          const allValues = collection.split(',');
          for (let i = 0; i < allValues.length; i++) {
            frmData.append(valueProp, allValues[i] );
          }
        } else {
          frmData.append(valueProp, this.form.value.inputFields[0][valueProp]);
        }
      }
    }
    for (let i = 0; i < this.myFiles.length; i++) {
      frmData.append('photo', this.myFiles[i]);
    }
    if (this.geoLocation) {
      frmData.append('address.latitude', this.geoLocation.coords.latitude);
      frmData.append('address.longitude', this.geoLocation.coords.longitude);
    }
    switch (this.formName) {
      case 'Restaurant-Form':
        console.log('form data----------', frmData);
        this.restaurantService.addRestaurant(frmData).subscribe(
          data => {
            console.log('data-------------', data['message']);
            alert(data['message']);
            window.location.reload();
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
