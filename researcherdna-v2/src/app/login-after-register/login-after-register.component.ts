import { Component, Input, OnInit, ViewChild  } from '@angular/core';
import { activeUser } from '../globals/globalVariables';
import { users } from '../globals/globalVariables';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login-after-register',
  templateUrl: './login-after-register.component.html',
  styleUrls: ['./login-after-register.component.css']
})
export class LoginAfterRegisterComponent implements OnInit {

  @ViewChild('email') email:any;
  @ViewChild('password') password:any;

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  loginUser(){
    //Check if the two users are good?
    for(let x =0; x < users.length; x++)
    {
      if(users[x].email == this.email.nativeElement.value && users[x].password == this.password.nativeElement.value)
        {
          console.log(users[x]);
          localStorage.setItem('active-user', JSON.stringify(users[x]));
          this.router.navigate(['./home']);
        }
      else
        console.log("User not found");
    }
  }


  openRegisterPage()
  {
    this.router.navigate(['./register'])
  }

}
