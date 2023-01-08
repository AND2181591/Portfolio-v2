import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelFigureComponent } from './pixel-figure/pixel-figure.component';
import { FireworksComponent } from './fireworks/fireworks.component';
import { NeonSignComponent } from './neon-sign/neon-sign.component';



@NgModule({
  declarations: [
    PixelFigureComponent,
    FireworksComponent,
    NeonSignComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PixelFigureComponent, 
    FireworksComponent, 
    NeonSignComponent
  ]
})
export class SharedModule { }
