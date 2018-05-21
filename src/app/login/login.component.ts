import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}


  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      data => {
        console.log('data----------', data);
        console.log('user----------', data['user']);
        if (data['success']) {
          localStorage.setItem('token', JSON.stringify(data['token']));
          localStorage.setItem('user', JSON.stringify(data['user']));
          this.router.navigate(['home']);
        } else {
          alert(data['error']);
        }
      },
      err => {
        console.log('error--------', err);
      }
    );
  }

}
