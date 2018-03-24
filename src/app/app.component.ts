import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'app';
  dummi;
  showCommentIndex=0;
 jsonvalues=[]
showComment;
CommentDetails=[
  {
    comment:"It was so worth it to get a Nanodegree. Seeing that first paycheck, I couldn’t believe it. I never thought,I’d be here. It’s like a dream.",
    author:"JENNIFER, Graduate"
  },
  {
    comment:"Before Udacity, I was a high school math teacher with no CS background. Now I'm an Android Developer at Capital One, doing something I love while earning twice as much.",
    author:"BEN, GRADUATE"
  },
  {
    comment:"Udacity has empowered me to be a better software engineer. They have given me opportunities that I would not have if I had to rely on the traditional education system.",
    author:" JONATHAN, GRADUATE"

  }
]
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
   this.showComment=this.CommentDetails[this.showCommentIndex]
    console.log(">>>",this.dummi.length,this.dummi[3])
    for(let i=0;i<this.dummi.length;i++)
this.getData(this.dummi[i],i)
  }

  getData(jsonObject,i){
  }
  // this.getData(dummi)
  
  next(){
    let CommentDetailslength=this.CommentDetails.length;
   
    if(this.showCommentIndex < CommentDetailslength-1){
      this.showCommentIndex++;
      this.showComment = this.CommentDetails[this.showCommentIndex]
    }
  }

previous(){

  let CommentDetailslength=this.CommentDetails.length;
  if(this.showCommentIndex > 0){
    this.showCommentIndex--;
    this.showComment = this.CommentDetails[this.showCommentIndex]
  }
}

}
