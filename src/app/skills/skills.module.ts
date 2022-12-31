import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SkillsComponent },
];

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class SkillsModule { }
