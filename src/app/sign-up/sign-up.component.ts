import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }


  ngOnInit() {
    this.signUpForm = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email] ),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, [Validators.required])
      // language: new FormControl()
    }, this.MatchPassword);
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.userService.signUp(this.signUpForm.value).subscribe(
      data => {
        console.log('data----------', data);
        if (data['success']) {
          localStorage.setItem('token', data['token']);
          this.router.navigate(['addMenu']);
        } else {
          alert(data['error']);
        }
      },
      err => {
        console.log('error--------', err);
      }
    );
  }

   MatchPassword(AC: FormGroup) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('confirmPassword').setErrors({ MatchPassword: true });
    } else {
      return null;
    }
  }


}
