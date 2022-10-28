import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { studentsList } from 'src/app/globals/globalVariables';

@Component({
  selector: 'app-student-projects-list',
  templateUrl: './student-projects-list.component.html',
  styleUrls: ['./student-projects-list.component.css']
})
export class StudentProjectsListComponent implements OnInit {

  constructor(private router: Router) { }

  studentList = studentsList;
  studentsComplains = [
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"}
  ]

  supervisorList = [
    {fullName: "Prof Phethivangeli Nyembe", supervisorId: "280233" , faculty: "Management Science" },
    {fullName: "Prof Siphiwe Ndou", supervisorId: "773222" , faculty: "ICT" },
    {fullName: "Dr Sylvester Shilaluke", supervisorId: "092122" , faculty: "ICT" },
    {fullName: "Dr Irene Sanyane", supervisorId: "298323" , faculty: "Humanities" }
  ]

  supervisor = this.supervisorList[0];
  ngOnInit(): void {

  }

  display = "none";
  display_edit_student = "none";
  close(){
    //Close the page.
    this.display = "none";
  }
  close_edit_student(){
    this.display_edit_student = "none";
  }
  open_edit_student(){
    this.display_edit_student = "unset";
  }

  openGrievances(){
    this.display = "unset";
  }

  viewStudent(studNumber: any)
  {
    console.log(localStorage.getItem('active-link-number'));
    //set the userId as the active use
    localStorage.setItem('active-student-on-display', studNumber);
    this.router.navigate(['projects/message'])

  }
  openedStudent = { studentCount: 1, studNumber: "216955961", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 1};
  display_assign_supervisor_card = "none";
  openAssignSupervisor(student: any){
    //Get the stue
    this.openedStudent = student;
    this.display_assign_supervisor_card =  "unset";
  }

  closeAssignSupervisor(){
    this.display_assign_supervisor_card = "none";
  }

}
