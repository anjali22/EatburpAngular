
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
  @ViewChild('fileInput') fileInput;

  title = 'app';
  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/uploadimage',
    itemAlias: 'photo'
  });
  constructor(private http: Http, private el: ElementRef, private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
  }
  upload() {
    // locate the file element meant for the file upload.
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    // get the total amount of files attached to the file input.
    const fileCount: number = inputEl.files.length;
    // create a new fromdata instance
    const formData = new FormData();
    // check if the filecount is greater than zero, to be sure a file was selected.
    if (fileCount > 0) { // a file was selected
      // append the key name 'photo' with the first file in the element
      formData.append('photo', inputEl.files.item(0));
      // call the angular http method
     /*  this.http
        // post the form data to the url defined above and map the response.
        // Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
        .post('http://localhost:3000/uploadrestoimage', formData).map((res: Response) => res.json()).subscribe(
        // map the success function and alert the response
        (success) => {
          alert(success._body);
        },
        (error) => console.log(error)); */
         /* this.restaurantService.addRestaurant(formData).subscribe(restaurant => {
      // restaurant.push(resto);
      console.log('restaurant added--------');
    }); */
    }
  }


}
