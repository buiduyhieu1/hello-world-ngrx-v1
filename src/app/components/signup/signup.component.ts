import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  passwordType: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  form: any = {
    username: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.passwordType = "text" : this.passwordType = "password";
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
