
import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { RestaurantService } from './services/restaurant.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: Http, private el: ElementRef, private restaurantService: RestaurantService) {
  }

  ngOnInit() {
  }



}
