import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { RestaurantBase } from '../restaurant-base';

@Component({
  selector: 'app-dynamic-form-restaurant',
  templateUrl: './dynamic-form-restaurant.component.html',
  styleUrls: ['./dynamic-form-restaurant.component.css']
})
export class DynamicFormRestaurantComponent {

  @Input() field: RestaurantBase<any>;
  @Input() form: FormGroup;
  @Input() formName: string;
  /* isValid() {
   return this.form.controls.inputField.getError('errors', ['form.controls.inputFields.controls[0].controls[]']);
  } */

}


