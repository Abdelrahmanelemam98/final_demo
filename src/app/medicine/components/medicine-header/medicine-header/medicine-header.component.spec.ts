import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineHeaderComponent } from './medicine-header.component';

describe('MedicineHeaderComponent', () => {
  let component: MedicineHeaderComponent;
  let fixture: ComponentFixture<MedicineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
