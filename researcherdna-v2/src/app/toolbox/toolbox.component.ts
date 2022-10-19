import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  isTableContentShow:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
