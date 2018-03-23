import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'app';
  dummi;
 jsonvalues=[]
  constructor(){
  this.dummi = [{
    "Software Products": [
      {
        "Programming Languages": [
          "Java API",
          "Python API"
        ]
      },
      {
        "Documentation": [
          "Java Docs",
          "Python Docs",
          {
            "HTTP Docs": [
              "REST Docs",
              "SOAP Docs"
            ]
          }
        ]
      },
      "Try It!"
    ]
  },
  {
    "Cloud Products": [
      "SAAS",
      "PAAS",
      "IAAS"
    ]
  },
  {
    "About Us": [
      {
        "Locations": [
          {
            "India": [
              "Delhi",
              {
                "Mumbai": [
                  "Lower Parel",
                  "Goregaon"
                ]
              },
              "Bangalore"
            ]
          },
          "USA",
          "Singapore"
        ]
      },
      "Founders",
      "Advisors"
    ]
  },
  "Contact Us"
]
console.log(">>>>>>>>.dummi",this.dummi)

  }
  ngOnInit()
  {
    console.log(">>>",this.dummi.length,this.dummi[3])
    for(let i=0;i<this.dummi.length;i++)
this.getData(this.dummi[i],i)
  }

  getData(jsonObject,i){

// var jsonObjectKeys =Object.keys(jsonObject)
// this.jsonvalues.push({values:jsonObject,key:'i'})
// if(jsonObject[i].length){
//   this.getData(jsonObject[i],i)
// }
// console.log("jsonvalues",this.jsonvalues)
// console.log(">>>>jsonObject",jsonObject)
// if(jsonObject.length>0)
// {
//   for(let j=0;j<jsonObject.length;i++)
//   this.getData(jsonObject[0],i++)
  // var jsonObjectKeys =Object.keys(jsonObject[i][0])
  // console.log(">>>>>>>>>",jsonObjectKeys)
// }
// if(jsonObjectKeys)
// {
  
  // this.jsonvalues.push({value:jsonObjectKeys,keys:i});
  // i++;
//   this.getData(jsonObjectKeys,i)
// }
// else{
  // this.jsonvalues.push({value:jsonObject,keys:i});
//   return
// }

  }
  // this.getData(dummi)
}
