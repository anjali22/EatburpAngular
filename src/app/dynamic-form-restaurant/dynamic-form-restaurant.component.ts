import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { RestaurantBase } from '../restaurant-base';
import { RestaurantControlService } from '../services/restaurant-field.service';

@Component({
  selector: 'app-dynamic-form-restaurant',
  templateUrl: './dynamic-form-restaurant.component.html',
  styleUrls: ['./dynamic-form-restaurant.component.css']
})
export class DynamicFormRestaurantComponent {

  @Input() fields: RestaurantBase<any>;
  @Input() form: FormGroup;
  @Input() formName: string;
  @Input() inputField: FormArray;
  /* isValid() {
   return this.form.controls.inputField.getError('errors', ['form.controls.inputFields.controls[0].controls[]']);
  } */

  constructor(
    private restaurntControlService: RestaurantControlService
  ) {}

  getControls(form, key: string) {
    return (<FormArray>form.controls[key]).controls;
  }

  addField(field, control) {
    console.log('added');
    this.restaurntControlService.addField(field, control);
    console.log(this.form);
  }

}


