import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { OptionsComponent } from './toolbox/options/options.component';
import { OptionsService } from './toolbox/options/options.service';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { StudentCardComponent } from './home/student-card/student-card.component';
import { StudentProjectComponent } from './home/student-project/student-project.component';
import { StudentsProjectsComponent } from './home/students-projects/students-projects.component';
import { HomeToolboxComponent } from './home/home-toolbox/home-toolbox.component';
import { HomeForumComponent } from './home/home-forum/home-forum.component';
import { HomeAccountComponent } from './home/home-account/home-account.component';
import { StudentHomeComponent } from './students/student-home/student-home.component';
import { StudentSupervisorComponent } from './students/student-supervisor/student-supervisor.component';
import { ManageStudentComponent } from './students/manage-student/manage-student.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolboxComponent,
    OptionsComponent,
    HeaderComponent,
    HomeComponent,
    HomeHeaderComponent,
    StudentCardComponent,
    StudentProjectComponent,
    StudentsProjectsComponent,
    HomeToolboxComponent,
    HomeForumComponent,
    HomeAccountComponent,
    StudentHomeComponent,
    StudentSupervisorComponent,
    ManageStudentComponent,
    InnerHeaderComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',  component: HomeComponent},
      {path: 'supervisor-students',  component: StudentSupervisorComponent},
      {path: 'admin-students',  component: StudentHomeComponent},
      {path: 'toolbox', component: ToolboxComponent},
      {path: '**',  component: NotfoundComponent},//The 2 asterics represent a wildcard meaning it will catch any error urls
    ])
  ],
  providers: [
    OptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
