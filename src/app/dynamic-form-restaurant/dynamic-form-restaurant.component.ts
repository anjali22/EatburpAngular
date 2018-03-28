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
  get isValid() { return this.form.controls[this.field.key].valid; }

}


