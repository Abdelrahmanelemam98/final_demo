import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScheduleTimeComponent } from './edit-schedule-time.component';

describe('EditScheduleTimeComponent', () => {
  let component: EditScheduleTimeComponent;
  let fixture: ComponentFixture<EditScheduleTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditScheduleTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditScheduleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
