import { Component, OnInit, ElementRef } from '@angular/core';
import { GoogleIntergationService } from '../google-intergation.service';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
declare const gapi: any;
declare const FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInTab = true;
  auth2: any;
  obj: any;
  loginFormpassword: any = '';
  loginFormemail: any = '';
  constructor(private element: ElementRef, private googleService: GoogleIntergationService, private http: Http) {


  }

  ngOnInit() {
    // console.log(">>>>",FB)

  }
  login(data) {
    console.log(data)
    if (data && data.form.value.email && data.form.value.password) {
      this.obj = {
        email: data.form.value.email,
        password: data.form.value.password
      }
      this.http.post('http://localhost:3000/user/signin', this.obj).subscribe((result) => {
        console.log(">>>>", result)
      }
      )
    }
    else {
      console.log("no")
    }
  }
  SignUPTabShow() {
    // console.log(">>>>>>>>>>")
    this.signInTab = false;
  }
  SingInTabShow() {
    // console.log(">>>>>>>>>>")
    this.signInTab = true;
  }


  SignUp() {

  }

  googleLogin() {
    console.log(">>>>>>>>>>>>>")
    this.googleService.googleLogin();
  }


  checkLoginState() {
    FB.getLoginStatus(function (response) {
      console.log(">>>>", response)
    });
  }
}
