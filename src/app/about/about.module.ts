import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeaderComponent } from './components/about-header/about-header/about-header.component';
import { AboutSectionComponent } from './components/about-section/about-section/about-section.component';
import { ChooseUsComponent } from './components/choose-us/choose-us/choose-us.component';
import { AboutWayComponent } from './components/way/about-way/about-way.component';
import { BestDoctorComponent } from './components/best-doctor/best-doctor/best-doctor.component';



@NgModule({
  declarations: [
    AboutHeaderComponent,
    AboutSectionComponent,
    ChooseUsComponent,
    AboutWayComponent,
    BestDoctorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
