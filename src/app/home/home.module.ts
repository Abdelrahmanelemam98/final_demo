import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeactionSearchComponent } from './components/sesction-search/seaction-search/seaction-search.component';
import { LookingForComponent } from './components/looking-for/looking-for/looking-for.component';
import { SpecialitiesComponent } from './components/specialities/components/specialities/specialities.component';
import { RouterModule, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DoctorsComponent } from './components/doctor/components/doctors/doctors.component';
import { AvaliableSectionComponent } from './components/available/avaliable-section/avaliable-section.component';

@NgModule({
  declarations: [
    SeactionSearchComponent,
    LookingForComponent,
    SpecialitiesComponent,
    DoctorsComponent,
    AvaliableSectionComponent,
  ],
  imports: [CommonModule, BrowserModule, RouterModule, CarouselModule],
  exports: [SeactionSearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
