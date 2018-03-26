import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ApicallService {

  constructor(private http:HttpClientModule) { 
    const serverUrl ="http://localhost:3010/"
  }

makeApiCall(url,data,type){

}






}
