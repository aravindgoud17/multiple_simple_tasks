import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstownerComponent } from './firstowner.component';

describe('FirstownerComponent', () => {
  let component: FirstownerComponent;
  let fixture: ComponentFixture<FirstownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
