import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleTimeComponent } from './add-schedule-time.component';

describe('AddScheduleTimeComponent', () => {
  let component: AddScheduleTimeComponent;
  let fixture: ComponentFixture<AddScheduleTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScheduleTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScheduleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
