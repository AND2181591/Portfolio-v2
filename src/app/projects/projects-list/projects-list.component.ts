import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PROJECT_ITEM_ROUTE } from 'src/app/constants/route.constants';
import { Project } from 'src/app/interfaces/project';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'], 
  animations: [
    trigger('pageAppear', [
      transition(':enter', [ style({ opacity: 0 }), animate('.5s', style({ opacity: 1 })) ]), 
      transition( ':leave', [ style({ opacity: 1 }), animate('.5s', style({ opacity: 0 })) ])
    ]), 
  ]
})
export class ProjectsListComponent implements OnInit {
  public projectItemRoute = PROJECT_ITEM_ROUTE;
  public projects: Project[] = [];

  constructor(private _projectsService: ProjectsService) {}

  public ngOnInit(): void {
    this.projects = this._projectsService.getAllProjects();
  }
}
