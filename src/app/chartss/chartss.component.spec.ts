import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartssComponent } from './chartss.component';

describe('ChartssComponent', () => {
  let component: ChartssComponent;
  let fixture: ComponentFixture<ChartssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
