import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeactionSearchComponent } from './home/components/sesction-search/seaction-search/seaction-search.component';
import { AboutHeaderComponent } from './about/components/about-header/about-header/about-header.component';
import { ContactHeaderComponent } from './contact-us/components/contact-header/contact-header/contact-header.component';
import { MedicineHeaderComponent } from './medicine/components/medicine-header/medicine-header/medicine-header.component';
import { MedicineDetailsComponent } from './medicine/components/medicine-details/medicine-details/medicine-details.component';
import { HeaderPatientComponent } from './patient/components/patient-header/header-patient/header-patient.component';
import { DoctorHeaderComponent } from './doctors/components/doctor-header/doctor-header/doctor-header.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SeactionSearchComponent },
  { path: 'about', component: AboutHeaderComponent },
  { path: 'contact', component: ContactHeaderComponent },
  { path: 'medicine', component: MedicineHeaderComponent },
  { path: 'details', component: MedicineDetailsComponent },
  { path: 'profile/patient', component: HeaderPatientComponent },
  { path: 'profile/doctor', component: DoctorHeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
