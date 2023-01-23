import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { PROJECT_ITEM_ROUTE } from '../constants/route.constants';

const routes: Routes = [
  { path: '', component: ProjectsComponent, 
    children: [
      { path: '', component: ProjectsListComponent }, 
      { path: `${PROJECT_ITEM_ROUTE}/:id`, component: ProjectItemComponent }
    ] 
  }
];

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    MaterialModule
  ]
})
export class ProjectsModule { }
