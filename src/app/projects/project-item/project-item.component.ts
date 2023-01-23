import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS_ROUTE } from 'src/app/constants/route.constants';
import { Project } from 'src/app/interfaces/project';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'], 
  animations: [
    trigger('pageAppear', [
      transition(':enter', [ style({ opacity: 0 }), animate('.5s', style({ opacity: 1 })) ]), 
      transition( ':leave', [ style({ opacity: 1 }), animate('.5s', style({ opacity: 0 })) ])
    ]), 
  ]
})
export class ProjectItemComponent implements OnInit {
  public projectsRoute = PROJECTS_ROUTE;
  public project: Project = {} as Project;

  constructor(
    private _route: ActivatedRoute, 
    private _projectsService: ProjectsService
  ) {}

  public ngOnInit(): void {
    const projectID = this._route.snapshot.params['id'];
    this.project = this._projectsService.getSingleProject(projectID);
    console.log(this.project)
  }
}
