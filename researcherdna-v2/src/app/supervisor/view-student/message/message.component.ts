import { Component, OnInit } from '@angular/core';
import { studentMails } from 'src/app/globals/globalVariables';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }
  userMails:any = [];
  totalMessages = 0;
  ngOnInit(): void {
    studentMails.forEach(element => {
      this.totalMessages++;
      this.userMails.push(element.messages[0]);
    });
  }

}
