import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestaurantMenuService } from '../services/restaurant-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;
  public searchOption;
  public cuisines;
  meals;
  dish_type;
  constructor(private router: Router, private restaurantMenuService: RestaurantMenuService) { }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('user'));
    console.log('home------------', this.user);
    this.restaurantMenuService.getSearchTag().subscribe(
      data => {
        console.log('results----------', data['results']);
        this.searchOption = data['results'];
        sessionStorage.setItem('searchTag', JSON.stringify(this.searchOption));
        console.log('searchOptions-------', this.searchOption);
      },
      err => {
        console.log('error---------', err);
      }
    );

    this.restaurantMenuService.getCuisines().subscribe(
      data => {
        console.log('results----------', data['results']);
        this.cuisines = data['results'];
        sessionStorage.setItem('cuisines', JSON.stringify(this.cuisines));
        console.log('cuisines-------', this.cuisines);
      },
      err => {
        console.log('error---------', err);
      }
    );

    this.restaurantMenuService.getMeals().subscribe(
      data => {
        console.log('results----------', data['results']);
        this.meals = data['results'];
        sessionStorage.setItem('meals', JSON.stringify(this.meals));
        console.log('meals-------', this.meals);
      },
      err => {
        console.log('error---------', err);
      }
    );

    this.restaurantMenuService.getDishType().subscribe(
      data => {
        console.log('results----------', data['results']);
        this.dish_type = data['results'];
        sessionStorage.setItem('dishType', JSON.stringify(this.dish_type));
        console.log('dishType-------', this.dish_type);
      },
      err => {
        console.log('error---------', err);
      }
    );
  }

  logout() {
    console.log('logout-----------');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log('localstorage', JSON.parse(localStorage.getItem('user')));
    this.router.navigate(['login']);
  }

}
