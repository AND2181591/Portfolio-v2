import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUT_ROUTE, CONTACT_ROUTE, PROJECTS_ROUTE } from './constants/route.constants';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: CONTACT_ROUTE, 
    loadChildren: () => 
      import('./contact/contact.module').then(m => m.ContactModule)
  },
  { 
    path: PROJECTS_ROUTE, 
    loadChildren: () => 
      import('./projects/projects.module').then(m => m.ProjectsModule)
  }, 
  { 
    path: ABOUT_ROUTE, 
    loadChildren: () => 
      import('./about/about.module').then(m => m.AboutModule) 
  }, 
  { path: '', pathMatch: 'full', component: HomeComponent }, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
