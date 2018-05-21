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

// services
import { MessageService } from './services/message.service';
import { RestaurantService } from './services/restaurant.service';
import { RestaurantControlService } from './services/restaurant-field.service';
import { FoodItemService } from './services/food-item.service';
import { RestaurantMenuService } from './services/restaurant-menu.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';

// components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { DynamicFormRestaurantComponent } from './dynamic-form-restaurant/dynamic-form-restaurant.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { DynamicMenuFormComponent } from './dynamic-menu-form/dynamic-menu-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddRestaurantComponent,
    FileSelectDirective,
    DynamicFormRestaurantComponent,
    DynamicFormComponent,
    AddFoodItemComponent,
    MenuItemComponent,
    DynamicMenuFormComponent,
    SignUpComponent
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
    RestaurantControlService,
    FoodItemService,
    RestaurantMenuService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
