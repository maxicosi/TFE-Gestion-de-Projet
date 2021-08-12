import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgrammeComponent } from './new-programme.component';

describe('NewProgrammeComponent', () => {
  let component: NewProgrammeComponent;
  let fixture: ComponentFixture<NewProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
