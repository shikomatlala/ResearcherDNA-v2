import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showOverView()
  {
    this.router.navigate(['projects-home'], {relativeTo: this.route})
  }


}
