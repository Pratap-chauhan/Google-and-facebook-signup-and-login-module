import { Injectable } from '@angular/core';
declare const gapi : any;
@Injectable()
export class GoogleIntergationService {

  constructor() {
    console.log(">>>>>>",gapi)
    gapi.load('auth2', function() {
      this.auth2=  gapi.auth2.init({
        client_id: "894829491932-7g08uphnc2dbbqmvu7j4s4vfsdt7vkij.apps.googleusercontent.com",
        scope: 'email',
        cookiepolicy: 'single_host_origin',
    });
    });
   }
   googleLogin() {
    console.log(">>>>>>>>>>>>>")
    let googleAuth = gapi.auth2.getAuthInstance();
 return   googleAuth.signIn({scope: 'profile email'})
  }
}
