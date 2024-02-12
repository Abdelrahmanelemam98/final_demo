import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorHeaderComponent } from './components/doctor-header/doctor-header/doctor-header.component';
import { DoctorMainComponent } from './components/doctor-main/doctor-main/doctor-main.component';
import { DoctorPatientListComponent } from './components/doctor-patient-list/doctor-patient-list/doctor-patient-list.component';
import { ScheduleTimingComponent } from './components/schedule-timing/schedule-timing/schedule-timing.component';
import { ReviewsComponent } from './components/reviews/reviews/reviews.component';
import { ProfileSettingsComponent } from '../patient/components/profile-settings/profile-settings/profile-settings.component';
import { DocProfileSettingsComponent } from './components/doc-profile-settings/doc-profile-settings/doc-profile-settings.component';
import { SocialMediaComponent } from './components/social-media/social-media/social-media.component';
import { ChangePasswordComponent } from './components/change-password/change-password/change-password.component';

const routes: Routes = [
  {
    path: 'profile/doctor',
    component: DoctorHeaderComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'home', component: DoctorMainComponent },
      { path: 'patients', component: DoctorPatientListComponent },
      { path: 'schedule', component: ScheduleTimingComponent },
      { path: 'review', component: ReviewsComponent },
      { path: 'profile-setting', component: DocProfileSettingsComponent },
      { path: 'social-media', component: SocialMediaComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
