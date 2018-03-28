import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';

const routes: Routes = [
    { path: '', component : LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'addRestaurant', component: AddRestaurantComponent},
    { path: 'login', component: LoginComponent },
    { path: 'addFoodItem', component: AddFoodItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  HomeComponent,
  AddRestaurantComponent
];
