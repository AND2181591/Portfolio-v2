import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelFigureComponent } from './pixel-figure.component';

describe('PixelFigureComponent', () => {
  let component: PixelFigureComponent;
  let fixture: ComponentFixture<PixelFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixelFigureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixelFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
