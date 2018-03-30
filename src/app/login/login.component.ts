import { Component, OnInit, ElementRef } from '@angular/core';
import { GoogleIntergationService } from '../services/google-intergation.service';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { ApicallService } from '../services/apicall.service';
import { LoginpermissionsService } from '../services/loginpermissions.service'
declare const gapi: any;
declare const FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInTab = true;
  loginsucess= false;
loginfailure=false;
  auth2: any;
  obj: any;
  loginFormpassword: any = '';
  loginFormemail: any = '';
  signUpFirstName:string;
  signUpLastName:string;
  signUpEmail:any;
  signUpPhoneNo:any;
  signUpPasssword:any;
  constructor(private element: ElementRef, 
    private googleService: GoogleIntergationService, 
    private http: Http,private callapi : ApicallService,
  private userpermission : LoginpermissionsService) {}

  ngOnInit() {
    // console.log(">>>>",FB)

  }
  login(data) {
    console.log(data)
    if (data && data.form.value.email && data.form.value.password) {
      let formdata = new FormData()
    formdata.append('email',data.form.value.email)
    formdata.append('password',data.form.value.password)
      this.obj = {
        email: data.form.value.email,
        password: data.form.value.password
      }
      // this.userpermission.getUserPermission('user/signin', formdata,4).subscribe((result)=>{
      //   console.log("><>>><")
      // this.loginsucess= true;
      //   this.loginfailure=false;
      // },
      this.userpermission.loginApiResponse.subscribe((result)=>{
console.log("result",result)
      })
//     (err)=>{
//       console.log("><>>><eeee")
//                 this.loginsucess= false;
// this.loginfailure=true
//     },
    
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
let obj={
  name:this.signUpFirstName,
  lastname:this.signUpLastName,
  email:this.signUpEmail,
  phoneNumber:this.signUpPhoneNo,
  password:this.signUpPasssword
}

this.callapi.makeApiCall('customer/register',obj,4).subscribe((result)=>{
  // console.log("><>>><")
  this.loginsucess= true;
    this.loginfailure=false;
  },
(err)=>{
  // console.log("><>>><eeee")
            this.loginsucess= false;
this.loginfailure=true
})
  }


  googleLogin() {
    // console.log(">>>>>>>>>>>>>")
    this.googleService.googleLogin().then((result)=>{
      if(result.Zi.access_token){
        console.log("gogle",result)
        this.loginsucess= true;
        this.loginfailure=false;
      }
  })
  }

  checkLoginState() {
    FB.getLoginStatus( (response)=> {
      console.log(">>>>", response)
    });
  }
}
