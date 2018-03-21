import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RestaurantBase } from '../restaurant-base';
import { RestaurantControlService } from '../../services/restaurant-field.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: RestaurantBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor( private fieldService: RestaurantControlService) { }

  ngOnInit() {
    this.form = this.fieldService.toFormGroup(this.fields);

  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
