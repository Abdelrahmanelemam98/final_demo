import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocProfileSettingsComponent } from './doc-profile-settings.component';

describe('DocProfileSettingsComponent', () => {
  let component: DocProfileSettingsComponent;
  let fixture: ComponentFixture<DocProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocProfileSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
