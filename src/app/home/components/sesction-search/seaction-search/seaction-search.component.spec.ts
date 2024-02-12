import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeactionSearchComponent } from './seaction-search.component';

describe('SeactionSearchComponent', () => {
  let component: SeactionSearchComponent;
  let fixture: ComponentFixture<SeactionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeactionSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeactionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
