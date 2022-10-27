import { Component, OnInit } from '@angular/core';
import { studentsList } from 'src/app/globals/globalVariables';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  activeStudentObject:any;
  ngOnInit(): void {
    //Get the active student list.
    var activeStudent = JSON.parse(localStorage.getItem('active-student-on-display')!)
    for(var x =0; x < studentsList.length; x++)
    {
      if(studentsList[x].studNumber == activeStudent)
      {
        this.activeStudentObject = studentsList[x];
        console.log("Good");
        x = studentsList.length;
      }
    }
  }

}
