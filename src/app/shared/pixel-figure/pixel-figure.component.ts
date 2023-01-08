import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pixel-figure',
  templateUrl: './pixel-figure.component.html',
  styleUrls: ['./pixel-figure.component.scss']
})
export class PixelFigureComponent {
  @Input() public animationActivated: boolean = false;
  @Output() public pixelFigureClicked = new EventEmitter<void>();

  public onFigureClick(): void {
    this.pixelFigureClicked.emit();
  }
}
