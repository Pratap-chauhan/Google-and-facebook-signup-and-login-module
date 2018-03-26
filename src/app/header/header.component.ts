import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Input() headerTop;
 classTop=false;
  constructor(private router : Router) { }

  ngOnInit() {
    console.log(">>>>>",this.headerTop)
  }

ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
console.log("jsdhf",changes)
this.headerTop=changes.headerTop.currentValue;
console.log("headerTop",this.headerTop)
if(this.headerTop > 200)
{
  this.classTop = true;
}
}

moveTologinPage() {
 
  this.router.navigateByUrl('/login');

}

}
