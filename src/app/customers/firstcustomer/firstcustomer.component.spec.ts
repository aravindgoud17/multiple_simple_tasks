import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcustomerComponent } from './firstcustomer.component';

describe('FirstcustomerComponent', () => {
  let component: FirstcustomerComponent;
  let fixture: ComponentFixture<FirstcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
