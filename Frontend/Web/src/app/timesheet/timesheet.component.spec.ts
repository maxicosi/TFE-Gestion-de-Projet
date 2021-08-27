import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeshitComponent } from './timesheet.component';

describe('TimeshitComponent', () => {
  let component: TimeshitComponent;
  let fixture: ComponentFixture<TimeshitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeshitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeshitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
