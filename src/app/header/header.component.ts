import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Input() headerTop;
 classTop=false;
  constructor() { }

  ngOnInit() {
    console.log(">>>>>",this.headerTop)
  }
//   Top(event){
// console.log(">>DFSgx",event)
//   }
ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
console.log("jsdhf",changes)
this.headerTop=changes.headerTop.currentValue;
console.log("headerTop",this.headerTop)
if(this.headerTop > 200)
{
  this.classTop = true;
}
}
}
