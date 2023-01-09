import { transition, trigger, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
  animations: [
    trigger('pageAppear', [
        transition(':enter', [ style({ opacity: 0 }), animate('.5s', style({ opacity: 1 })) ]), 
        transition( ':leave', [ style({ opacity: 1 }), animate('.5s', style({ opacity: 0 })) ])
    ]), 
    trigger('appearAnimation', [
        transition(':enter', [ style({ opacity: 0 }), animate('1s 2s', style({ opacity: 1 })) ]), 
        transition(':leave', [ style({ opacity: 1 }), animate('.5s', style({ opacity: 0 })) ])
    ])
  ]
})
export class HomeComponent {
  public animationActivated: boolean = false;

  public onPixelFigureClicked(): void {
    this.animationActivated = !this.animationActivated;
  }
}
