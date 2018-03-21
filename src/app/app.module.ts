import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileSelectDirective} from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';

// components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddRestaurantComponent } from './Restaurant/add-restaurant/add-restaurant.component';
import { DynamicFormRestaurantComponent } from './Restaurant/dynamic-form-restaurant/dynamic-form-restaurant.component';
import { DynamicFormComponent } from './Restaurant/dynamic-form/dynamic-form.component';

// services
import { MessageService } from './services/message.service';
import { RestaurantService } from './services/restaurant.service';
import { RestaurantControlService } from './services/restaurant-field.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddRestaurantComponent,
    FileSelectDirective,
    DynamicFormRestaurantComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MessageService,
    RestaurantService,
    RestaurantControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
