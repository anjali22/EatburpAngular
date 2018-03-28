import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  formName: String = 'Restaurant-Form';
  fields: any;
  myFiles: string[] = [];
  sMsg = '';
  name = '';
  public myForm: FormGroup; // our model driven form
  constructor(private _fb: FormBuilder,
    private restaurantService: RestaurantService,
    private httpService: HttpClient) {
      this.fields = restaurantService.getFields();
     }
  results: object[];
  restaurant: Restaurant;

  ngOnInit() {
  }
  /************** This code can be removed from here. ***********************
    getFileDetails(e) {
    // console.log (e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }

  uploadFiles() {
    const frmData = new FormData();
    console.log('name--------', this.name);
    for (let i = 0; i < this.myFiles.length; i++) {
      frmData.append('photo', this.myFiles[i]);
    }
    frmData.append(this.restaurant.phone, this.name);

    this.httpService.post('http://localhost:3000/uploadimage', frmData).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
        this.sMsg = data as string;
        console.log(this.sMsg);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);    // SHOW ERRORS IF ANY.
      }
    );
  } */
}
