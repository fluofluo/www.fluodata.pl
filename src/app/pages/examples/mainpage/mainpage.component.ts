import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent implements OnInit {
  
  isCollapsed = true;
  
  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }

}
