import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.css']
})
export class InnerHeaderComponent implements OnInit {
  @Input() activePageName = "";
  constructor() { }
  activeUser: any;
  ngOnInit(): void {
    this.activeUser = JSON.parse(localStorage.getItem('active-user')!);
    
  }

}
