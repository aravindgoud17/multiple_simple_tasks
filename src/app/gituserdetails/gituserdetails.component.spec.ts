import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GituserdetailsComponent } from './gituserdetails.component';

describe('GituserdetailsComponent', () => {
  let component: GituserdetailsComponent;
  let fixture: ComponentFixture<GituserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GituserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GituserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
