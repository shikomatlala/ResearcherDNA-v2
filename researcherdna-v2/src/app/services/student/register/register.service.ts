import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { studentGlobalURL } from '../globals/service.globals.student';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }



  registerUser(newStudent:any){
    return this.http.post(`${studentGlobalURL + "register"}`, newStudent)
  }
}
