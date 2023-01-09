import { Component } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'], 
  animations: [
    trigger('pageAppear', [
      transition(':enter', [ style({ opacity: 0 }), animate('.5s', style({ opacity: 1 })) ]), 
      transition( ':leave', [ style({ opacity: 1 }), animate('.5s', style({ opacity: 0 })) ])
    ]), 
  ]
})
export class AboutComponent {

}
