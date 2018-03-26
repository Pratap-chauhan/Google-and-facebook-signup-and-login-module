import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';

@Injectable()
export class ApicallService {
 serverUrl ="http://localhost:3010/";
  constructor( private http: Http) { 
    
  }

makeApiCall(url,data,type){
if(type=1)
{
  return this.http.post(this.serverUrl+url, data)
}
else if(type==2){
 return this.http.get(this.serverUrl+url)
}


}







}
