import { Component, OnInit, Input, Output, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor() { }
  pages = {home: 0, students: 1, project: 2, projects: 3, toolbox: 4, forum: 5, account: 6}
  @ViewChild("page_0") page_0: any;
  @ViewChild("page_1") page_1: any;
  @ViewChild("page_2") page_2: any;
  @ViewChild("page_4") page_4: any;
  @ViewChild("page_5") page_5: any;
  @ViewChild("page_6") page_6: any;
  setActive = "border-right: 2px solid rgb(0, 170, 255); background-color: rgba(255, 255, 255, 0.669);"
  setInactive = "border-right: 2px solid rgb(0, 170, 255, 0); background-color: rgba(255, 255, 255, 0.);"

  activeElementStyle = {unsetBackgroundColor: "rgba(255, 255, 255, 0)", unsetBorderRightColor: "2px solid rgb(0, 170, 255, 0)", borderRightColor: "2px solid rgb(0, 170, 255)", backgroundColor: "rgba(255, 255, 255, 0.669)"}
  setInitialActiveStyle = `border-right: ${this.activeElementStyle.borderRightColor}; background-color: ${this.activeElementStyle.backgroundColor};`;
  unsetInitialActiveStyle = `border-right: ${this.activeElementStyle.unsetBackgroundColor}; background-color: ${this.activeElementStyle.unsetBackgroundColor};`
  ItemsToDisplay =
    {page0: this.unsetInitialActiveStyle,
    page1: this.unsetInitialActiveStyle,
    page2: this.unsetInitialActiveStyle,
    page4: this.unsetInitialActiveStyle,
    page5: this.unsetInitialActiveStyle,
    page6: this.unsetInitialActiveStyle};

  pageStatusesArray = [
    this.setInactive,
    this.setInactive ,
    this.setInactive ,
    this.setInactive ,
    this.setInactive ,
    this.setInactive]
  ngOnInit(): void {
    console.log("value", localStorage.getItem('sidenav-active-tag-number'));
    if(localStorage.getItem('sidenav-active-tag-number') == null)
    {
      setInitialPageActive(this.pageStatusesArray, this.setActive, 1)
    }
    else{

      manageActiveTabs(this.pageStatusesArray, this.setActive, this.setInactive, 0);
      manageActiveTabs(this.pageStatusesArray, this.setActive, this.setInactive, 1);
      manageActiveTabs(this.pageStatusesArray, this.setActive, this.setInactive, 2);
      manageActiveTabs(this.pageStatusesArray, this.setActive, this.setInactive, 3);
      manageActiveTabs(this.pageStatusesArray, this.setActive, this.setInactive, 4);
      manageActiveTabs(this.pageStatusesArray, this.setActive, this.setInactive, 5);
    }



    function setInitialPageActive(pageStatusesArray:any, setActive:any, index:any){
      pageStatusesArray[index] = setActive;
      console.log(pageStatusesArray);
    }
    function setInitialPageInActive(pageStatusesArray:any, setInactive:any, index:any){
      pageStatusesArray[index] = setInactive;
      console.log(pageStatusesArray);
    }

    function manageActiveTabs(pageStatusesArray:any, setActive:any, setInactive:any, index:any)
    {
      if(localStorage.getItem('sidenav-active-tag-number') == index.toString){
        setInitialPageActive(pageStatusesArray, setActive, index)
      }
      else
      {
        setInitialPageInActive(pageStatusesArray, setInactive, index)
      }
    }
  }

  openPage(pageId:number){

    // localStorage.setItem('active-link-number', pageId.toString());
    // this.page_0.nativeElement.style.borderRight= this.activeElementStyle.borderRightColor;
    // this.page_0.nativeElement.style.backgroundColor = this.activeElementStyle.backgroundColor;
  }

  setInitalHomePage()
  {
  //   this.page_0.nativeElement.style.borderRight= this.activeElementStyle.borderRightColor;
  //   this.page_0.nativeElement.style.backgroundColor = this.activeElementStyle.backgroundColor;
   }
  setPageActive(_viewChild:any,pageNumber:number){
    if(this.page_0.nativeElement === _viewChild)
      {
        saveChanges(pageNumber);
        activatePage(this.page_0, this.activeElementStyle);
      }
    else
      deactivatePage(this.page_0, this.activeElementStyle);

    if(this.page_1.nativeElement === _viewChild)
      {
        saveChanges(pageNumber);
        activatePage(this.page_1, this.activeElementStyle);
      }
    else
      deactivatePage(this.page_1, this.activeElementStyle);

    if(this.page_2.nativeElement === _viewChild)
      {
        saveChanges(pageNumber);
        activatePage(this.page_2, this.activeElementStyle);
      }
    else
      deactivatePage(this.page_2, this.activeElementStyle);

    if(this.page_4.nativeElement === _viewChild)
      {
        saveChanges(pageNumber);
        activatePage(this.page_4, this.activeElementStyle);
      }
    else
      deactivatePage(this.page_4, this.activeElementStyle);

    if(this.page_5.nativeElement === _viewChild)
      {
        saveChanges(pageNumber);
        activatePage(this.page_5, this.activeElementStyle);
      }
    else
      deactivatePage(this.page_5, this.activeElementStyle);

    if(this.page_6.nativeElement === _viewChild)
      {
        saveChanges(pageNumber);
        activatePage(this.page_6, this.activeElementStyle);
      }
    else
      deactivatePage(this.page_6, this.activeElementStyle);

    function activatePage(page:any, style:any)
    {
      console.log(localStorage.getItem('sidenav-active-tag-number'));
      page.nativeElement.style.borderRight = style.borderRightColor;
      page.nativeElement.style.backgroundColor = style.backgroundColor;
    }
    function deactivatePage(page:any, style:any){
      page.nativeElement.style.borderRight = style.unsetBorderRightColor;

      page.nativeElement.style.backgroundColor = style.unsetBackgroundColor;
    }
    function saveChanges(pageId:number){
      localStorage.setItem('sidenav-active-tag-number', pageId.toString());
    }
  }

}
