import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbcComponent } from './fbc.component';

describe('FbcComponent', () => {
  let component: FbcComponent;
  let fixture: ComponentFixture<FbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
