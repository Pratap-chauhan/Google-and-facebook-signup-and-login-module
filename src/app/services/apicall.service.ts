import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule ,RequestOptions} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class ApicallService {
 serverUrl ="http://localhost:3010/";
  constructor( private http: Http) { 
    
  }

makeApiCall(url,data,type){
if(type=1)
{
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/form-data',
      'Authorization': 'my-auth-token'
    })
  };

  return this.http.post(this.serverUrl+url, data)
}
else if(type==2){
 return this.http.get(this.serverUrl+url)
}


}







}
