import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdTaskComponent } from './curd-task.component';

describe('CurdTaskComponent', () => {
  let component: CurdTaskComponent;
  let fixture: ComponentFixture<CurdTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
