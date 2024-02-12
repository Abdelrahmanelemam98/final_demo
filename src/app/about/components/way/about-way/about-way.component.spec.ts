import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWayComponent } from './about-way.component';

describe('AboutWayComponent', () => {
  let component: AboutWayComponent;
  let fixture: ComponentFixture<AboutWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
