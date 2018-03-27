import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { HttpErrorResponse } from '@angular/common/http/src/response';


import { RestaurantBase } from '../restaurant-base';
import { RestaurantControlService } from '../../services/restaurant-field.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: RestaurantBase<any>[] = [];
  form: FormGroup;
  myFiles: string[] = [];
  payLoad = '';
  name: 'surbhi';
  public data: any = {};

  constructor( private fieldService: RestaurantControlService,
    private httpService: HttpClient) { }

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
    const object = this.form.controls;
    for (const prop in object) {
      if (object.hasOwnProperty(prop)) {
        console.log('propertiessssssss', prop);
        for ( const valueProp in formValue) {
          if (valueProp === prop) {
            console.log('value----------', valueProp);
            console.log('all set--------');
            frmData.append(prop, this.form.value[valueProp]);
          }
        }
      }
    }
    for (let i = 0; i < this.myFiles.length; i++) {
      frmData.append('photo', this.myFiles[i]);
    }
    this.httpService.post('http://localhost:3000/uploadrestoimage', frmData).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);    // SHOW ERRORS IF ANY.
      }
    );
  }

  onSubmit() {
    this.formValue();
    // this.payLoad = JSON.stringify(this.form.value);
     // console.log('form value------------', this.form.value);
    /* const frmData = new FormData();
      console.log('name--------', this.name);
     frmData.append('name', 'surbhi'); */
     /* frmData.append(this.data.name, this.form.value);
    for (let i = 0; i < this.myFiles.length; i++) {
      frmData.append('photo', this.myFiles[i]);
    } */
    // frmData.append(this.fields, this.payLoad);
    /* console.log('formdata--------', frmData.getAll('name'));
    this.httpService.post('http://localhost:3000/uploadimage', frmData).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);    // SHOW ERRORS IF ANY.
      }
    ); */
  }


}
