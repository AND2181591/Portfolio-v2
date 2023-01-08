import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelFigureComponent } from './pixel-figure/pixel-figure.component';
import { FireworksComponent } from './fireworks/fireworks.component';



@NgModule({
  declarations: [
    PixelFigureComponent,
    FireworksComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PixelFigureComponent, 
    FireworksComponent
  ]
})
export class SharedModule { }
