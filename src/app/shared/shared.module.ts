import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelFigureComponent } from './pixel-figure/pixel-figure.component';



@NgModule({
  declarations: [
    PixelFigureComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PixelFigureComponent
  ]
})
export class SharedModule { }
