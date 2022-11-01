import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../services/student/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerStudent: RegisterService,
    private router :Router) { }
  @ViewChild("firstName") firstName:any;
  @ViewChild("lastName") lastName:any;
  @ViewChild("email") email:any;
  @ViewChild("idNumber") idNumber:any;
  @ViewChild("studNumber") studNumber:any;
  @ViewChild("password") password:any;

  ngOnInit(): void {
  }
  registerUser()
  {
    let newStudent = {firstName: this.firstName.nativeElement.value,
    lastName: this.lastName.nativeElement.value,
    email: this.email.nativeElement.value,
    idNumber: this.idNumber.nativeElement.value,
    studNumber: this.studNumber.nativeElement.value,
    password: this.password.nativeElement.value};

    console.log(newStudent);
    this.registerStudent.registerUser(newStudent).subscribe((data:any)=>{
      console.log(data);
      if(data.status == "success")
      {
        this.router.navigate(['./'])
      }
    })

  }
}
