import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Output activePagff
  pages = {home: 0, students: 1, project: 2, projects: 3, toolbox: 4, forum: 5, account: 6}
  //The goal is to know what we are clicking, when we click a page the page needs to take us to the right location.
  //Firstly the goal is to make sure that we can see anything that we are clicking.

  //So we are going to have a single function that handles all the routes.
  openPage(pageId:number){
    console.log(pageId);
    //Now we need a way to send this pageId to the main page.

  }
  svgColor:string = "green";
}
