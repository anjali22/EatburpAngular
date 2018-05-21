import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'Signup', component: SignUpComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'addRestaurant', component: AddRestaurantComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'addFoodItem', component: AddFoodItemComponent, canActivate: [AuthGuard]},
  { path: 'addMenu', component: MenuItemComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
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
