import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorHeaderComponent } from './components/doctor-header/doctor-header/doctor-header.component';
import { DoctorControlComponent } from './components/doctor-control/doctor-control/doctor-control.component';
import { DoctorMainComponent } from './components/doctor-main/doctor-main/doctor-main.component';
import { DoctorPatientListComponent } from './components/doctor-patient-list/doctor-patient-list/doctor-patient-list.component';
import { ScheduleTimingComponent } from './components/schedule-timing/schedule-timing/schedule-timing.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AddScheduleTimeComponent } from './components/add-schedule-time/add-schedule-time.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EditScheduleTimeComponent } from './components/edit-schedule-time/edit-schedule-time/edit-schedule-time.component';
import { ReviewsComponent } from './components/reviews/reviews/reviews.component';
import { DocProfileSettingsComponent } from './components/doc-profile-settings/doc-profile-settings/doc-profile-settings.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SocialMediaComponent } from './components/social-media/social-media/social-media.component';
import { ChangePasswordComponent } from './components/change-password/change-password/change-password.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list/doctor-list.component';

@NgModule({
  declarations: [
    DoctorHeaderComponent,
    DoctorControlComponent,
    DoctorMainComponent,
    DoctorPatientListComponent,
    ScheduleTimingComponent,
    AddScheduleTimeComponent,
    EditScheduleTimeComponent,
    ReviewsComponent,
    DocProfileSettingsComponent,
    SocialMediaComponent,
    ChangePasswordComponent,
    DoctorListComponent,
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
  ],
})
export class DoctorsModule {}
