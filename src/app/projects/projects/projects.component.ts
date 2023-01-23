import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'], 
  animations: [
    trigger('pageAppear', [
      transition(':enter', [ style({ opacity: 0 }), animate('.5s', style({ opacity: 1 })) ]), 
      transition( ':leave', [ style({ opacity: 1 }), animate('.5s', style({ opacity: 0 })) ])
    ]), 
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {
    
  }
}
