import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdFormComponent } from './curd-form.component';

describe('CurdFormComponent', () => {
  let component: CurdFormComponent;
  let fixture: ComponentFixture<CurdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
