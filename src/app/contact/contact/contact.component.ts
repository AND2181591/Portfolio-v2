import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'], 
  animations: [
    trigger('pageAppear', [
      transition(':enter', [ style({ opacity: 0 }), animate('.5s', style({ opacity: 1 })) ]), 
      transition( ':leave', [ style({ opacity: 1 }), animate('.5s', style({ opacity: 0 })) ])
    ]), 
  ]
})
export class ContactComponent {

}
