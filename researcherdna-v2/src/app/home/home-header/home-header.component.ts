import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { activeUser } from 'src/app/globals/globalVariables';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  constructor() { }
  activeUser:any;
  ngOnInit(): void {
    this.activeUser = JSON.parse(localStorage.getItem('active-user')!);
    console.log(activeUser);
  }

}
