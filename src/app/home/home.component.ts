import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;
  constructor( private router: Router) { }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('user'));
    console.log('home------------', this.user);
  }

  logout() {
    console.log('logout-----------');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log('localstorage', JSON.parse(localStorage.getItem('user')));
    this.router.navigate(['login']);
  }

}
