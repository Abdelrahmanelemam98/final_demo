import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderPatientComponent } from './components/patient-header/header-patient/header-patient.component';
import { HomePatientComponent } from './components/home-patient-profile/home-patient/home-patient.component';
import { DependentComponent } from './components/dependent/dependent/dependent.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password/change-password.component';

const routes: Routes = [
  {
    path: 'profile/patient',
    component: HeaderPatientComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'home', component: HomePatientComponent },
      { path: 'dependent', component: DependentComponent },
      { path: 'profile-setting', component: ProfileSettingsComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
