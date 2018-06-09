import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;
  public searchOption;
  constructor(private router: Router, private restaurantService: RestaurantService) { }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('user'));
    console.log('home------------', this.user);
    this.restaurantService.getRestoName().subscribe(
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
  }

  logout() {
    console.log('logout-----------');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log('localstorage', JSON.parse(localStorage.getItem('user')));
    this.router.navigate(['login']);
  }

}
