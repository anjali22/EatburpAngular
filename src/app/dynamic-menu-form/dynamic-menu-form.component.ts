import { Component,
         OnInit,
         Input,
        } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { RestaurantBase } from '../restaurant-base';
import { RestaurantControlService } from '../services/restaurant-field.service';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantMenuService } from '../services/restaurant-menu.service';

@Component({
  selector: 'app-dynamic-menu-form',
  templateUrl: './dynamic-menu-form.component.html',
  styleUrls: ['./dynamic-menu-form.component.css']
})
export class DynamicMenuFormComponent implements OnInit {

  @Input() fields: any[];
  @Input() formName: string;
  form: FormGroup;
  restaurants: any[];
  inputFields: FormArray;

  constructor(
    private fieldService: RestaurantControlService,
    private restaurantService: RestaurantService,
    private restaurantMenuService: RestaurantMenuService,
    private router: Router
  ) { }

  ngOnInit() {
    const restaurant = new FormControl('', Validators.required);
    this.form = this.fieldService.toFormGroup(this.fields);
    this.form.addControl('restaurant', restaurant);
    this.getRestoName();
    this.form.controls['restaurant'].setValue(this.restaurants);
  }

  onRestoChange(resto) {
    console.log('resto----------', resto);
  }

  getRestoName() {
    this.restaurantService.getRestoName().subscribe(
      data => {
        console.log('data-----------', data['results']);
        this.restaurants = data['results'];
      },
      err => {
        console.log('error---------', err);
      }
    );
  }

  addComponent() {
    // console.log('before adding', this.fields);
    this.fieldService.addFields(this.fields);
    console.log(this.form);
  }

  onSubmit() {
    console.log(this.form.value);

    this.restaurantMenuService.addMenu(this.form.value)
      .subscribe(data => {
        console.log(data['message']);
        alert(data['message']);
        window.location.reload();
      },
    err => {
      console.log(err);
      alert(err['message']);
    });

  }

  getControls(form, key: string) {
    return (<FormArray>form.controls[key]).controls;
  }

}
