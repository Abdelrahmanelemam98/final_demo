import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientControlComponent } from './components/patient-control/patient-control/patient-control.component';
import { HeaderPatientComponent } from './components/patient-header/header-patient/header-patient.component';
import { HomePatientComponent } from './components/home-patient-profile/home-patient/home-patient.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BmiComponent } from './components/BMI/bmi/bmi.component';
import { HeartRateComponent } from './components/heart-rate/heart-rate/heart-rate.component';
import { FbcComponent } from './components/FBC/fbc/fbc.component';
import { WeightComponent } from './components/Weight/weight/weight.component';
import { DependentComponent } from './components/dependent/dependent/dependent.component';
import { EditDependentComponent } from './components/Edit-Dependent/edit-dependent/edit-dependent.component';
import { AddDependentComponent } from './components/Add-Dependent/add-dependent/add-dependent.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password/change-password.component';
@NgModule({
  declarations: [
    PatientControlComponent,
    HeaderPatientComponent,
    HomePatientComponent,
    BmiComponent,
    HeartRateComponent,
    FbcComponent,
    WeightComponent,
    DependentComponent,
    EditDependentComponent,
    AddDependentComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class PatientModule {}
