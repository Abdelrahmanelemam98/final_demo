import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorControlComponent } from './doctor-control.component';

describe('DoctorControlComponent', () => {
  let component: DoctorControlComponent;
  let fixture: ComponentFixture<DoctorControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
