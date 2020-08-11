import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policypage',
  templateUrl: './policypage.component.html'
})
export class PolicypageComponent implements OnInit {
  
  isCollapsed = true;
  
  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }

  

}
