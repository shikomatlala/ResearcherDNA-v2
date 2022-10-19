import { Component } from '@angular/core';
import { activePageName } from './globals/globalVariables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'researcherdna-v2';
  getActivePageName(){
    var index:any = localStorage.getItem('sidenav-active-tag-number')
    return activePageName[index];
  }
}
