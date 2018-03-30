import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule , Response} from '@angular/http';
import { ApicallService } from './apicall.service';
import { Observable } from "rxjs/Rx";
import { ReplaySubject } from 'rxjs';


export interface apiResult{
loginapires:any;
}

@Injectable()
export class LoginpermissionsService {
 public loginApiResponse:ReplaySubject<any> = new ReplaySubject(1);

  constructor(private http : Http,private apicall : ApicallService) { 
  }

getUserPermission(url,data,type){
this.apicall.makeApiCall(url,data,type).subscribe((result:Response)=>{
  console.log("><>>><",result)
this.loginApiResponse.next(result)
  return this.loginApiResponse
},

)
}




}
