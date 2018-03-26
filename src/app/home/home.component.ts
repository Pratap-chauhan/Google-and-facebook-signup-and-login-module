import { Component, OnInit,Output,  EventEmitter,HostListener, Inject,Input } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW_PROVIDERS, WINDOW } from "../../../src/window.service";


// @Output() Top = new EventEmitter<boolean>();
// @Input() top
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  showHeader =false;
  top="0px"
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
  constructor(private router : Router,   @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window){}

  
  ngOnInit()
  {
   
   this.showComment=this.CommentDetails[this.showCommentIndex]
  }

  ngOnChange(){

  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(offset);
    if(offset>200){
this.showHeader = true
    }
    else
    this.showHeader=false
  }


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

moveTologinPage() {
 
    this.router.navigateByUrl('/login');

}




}
