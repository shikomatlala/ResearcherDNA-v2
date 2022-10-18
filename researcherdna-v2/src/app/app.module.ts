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
import { ProposalRejectionsComponent } from './toolbox/proposal-rejections/proposal-rejections.component';
import { PrelimProposalComponent } from './toolbox/prelim-proposal/prelim-proposal.component';
import { GetGrammarlyComponent } from './toolbox/get-grammarly/get-grammarly.component';
import { SurveySoftwareComponent } from './toolbox/survey-software/survey-software.component';
import { FreeEBookComponent } from './toolbox/free-e-book/free-e-book.component';
import { ResearcherdnaComponent } from './toolbox/researcherdna/researcherdna.component';
import { BuildingRdnaComponent } from './toolbox/building-rdna/building-rdna.component';
import { CreatingWisdomComponent } from './toolbox/creating-wisdom/creating-wisdom.component';
import { TheResearchOnionComponent } from './toolbox/the-research-onion/the-research-onion.component';
import { TheResearchJourneyComponent } from './toolbox/the-research-journey/the-research-journey.component';
import { JournalsComponent } from './toolbox/journals/journals.component';
import { BibliometricsComponent } from './toolbox/bibliometrics/bibliometrics.component';
import { PreProposalComponent } from './toolbox/pre-proposal/pre-proposal.component';
import { TutLisSearchComponent } from './toolbox/tut-lis-search/tut-lis-search.component';
import { GoogleScholarComponent } from './toolbox/google-scholar/google-scholar.component';
import { ProblemStatementComponent } from './toolbox/problem-statement/problem-statement.component';
import { TheTopicComponent } from './toolbox/the-topic/the-topic.component';
import { ResQuestionsComponent } from './toolbox/res-questions/res-questions.component';
import { LitReivewComponent } from './toolbox/lit-reivew/lit-reivew.component';
import { LitReviewComponent } from './toolbox/lit-review/lit-review.component';
import { ProposalDraftComponent } from './toolbox/proposal-draft/proposal-draft.component';
import { ResearchDesignComponent } from './toolbox/research-design/research-design.component';
import { MmrProtocolComponent } from './toolbox/mmr-protocol/mmr-protocol.component';
import { EthicsComponent } from './toolbox/ethics/ethics.component';
import { TutEthicsComponent } from './toolbox/tut-ethics/tut-ethics.component';
import { ResearchJourneyComponent } from './toolbox/research-journey/research-journey.component';
import { IvankovaJourneyComponent } from './toolbox/ivankova-journey/ivankova-journey.component';

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
    NotfoundComponent,
    ProposalRejectionsComponent,
    PrelimProposalComponent,
    GetGrammarlyComponent,
    SurveySoftwareComponent,
    FreeEBookComponent,
    ResearcherdnaComponent,
    BuildingRdnaComponent,
    CreatingWisdomComponent,
    TheResearchOnionComponent,
    TheResearchJourneyComponent,
    JournalsComponent,
    BibliometricsComponent,
    PreProposalComponent,
    TutLisSearchComponent,
    GoogleScholarComponent,
    ProblemStatementComponent,
    TheTopicComponent,
    ResQuestionsComponent,
    LitReivewComponent,
    LitReviewComponent,
    ProposalDraftComponent,
    ResearchDesignComponent,
    MmrProtocolComponent,
    EthicsComponent,
    TutEthicsComponent,
    ResearchJourneyComponent,
    IvankovaJourneyComponent
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
