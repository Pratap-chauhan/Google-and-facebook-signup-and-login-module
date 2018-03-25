import { Component, OnInit } from '@angular/core';
declare const gapi : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
signInTab=true;

  constructor() {
    console.log(">>>>>>",gapi)
    gapi.load('auth2', function() {
    gapi.auth2.init({
        client_id: "894829491932-r1vqtiok0ce5jlnp1bgvknioe7r11aeg.apps.googleusercontent.com",
        scope: 'email',
        cookiepolicy: 'single_host_origin',
        fetch_basic_profile: false
    });
    });
   }

  ngOnInit() {
  }
  login(){

  }
  SignUPTabShow()
{
  console.log(">>>>>>>>>>")
  this.signInTab=false;
}
SingInTabShow(){
  console.log(">>>>>>>>>>")
  this.signInTab=true;
}
SignUp(){

}

googleLogin() {
  console.log(">>>>>>>>>>>>>")
  let googleAuth = gapi.auth2.getAuthInstance();
  googleAuth.then(() => {
     googleAuth.signIn({scope: 'profile email'}).then(googleUser => {
        console.log(googleUser.getBasicProfile());
     });
  });
}


}
