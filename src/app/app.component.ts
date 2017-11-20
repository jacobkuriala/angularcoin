import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor(){

  }

  ngOnInit(){


  }
}
