import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonSignComponent } from './neon-sign.component';

describe('NeonSignComponent', () => {
  let component: NeonSignComponent;
  let fixture: ComponentFixture<NeonSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeonSignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeonSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
