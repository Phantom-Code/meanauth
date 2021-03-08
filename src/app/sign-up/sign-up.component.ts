import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  username = '';
  mail = '';
  password = '';
  cpassword = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  signUpFormSubmitHandler(form: NgForm) {
    console.log(form, 'form.....');

    if (!form.valid) {
      console.log('Not valid form');
      return;
    }
    this.auth.signUp(this.username, this.mail, this.cpassword);
  }
}
