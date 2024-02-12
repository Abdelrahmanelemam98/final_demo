import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { MedicineModule } from './medicine/medicine.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientModule } from './patient/patient.module';
import { PatientRoutingModule } from './patient/patient-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DoctorsModule } from './doctors/doctors.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    BrowserAnimationsModule,
    AboutModule,
    ContactUsModule,
    MedicineModule,
    PatientModule,
    PatientRoutingModule,
    MatTabsModule,
    DoctorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
