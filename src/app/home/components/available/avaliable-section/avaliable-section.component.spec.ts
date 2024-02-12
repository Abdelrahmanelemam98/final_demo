import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableSectionComponent } from './avaliable-section.component';

describe('AvaliableSectionComponent', () => {
  let component: AvaliableSectionComponent;
  let fixture: ComponentFixture<AvaliableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliableSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
