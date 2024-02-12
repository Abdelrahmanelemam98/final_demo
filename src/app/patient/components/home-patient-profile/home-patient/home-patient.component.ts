import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BmiComponent } from '../../BMI/bmi/bmi.component';
import { HeartRateComponent } from '../../heart-rate/heart-rate/heart-rate.component';
import { FbcComponent } from '../../FBC/fbc/fbc.component';
import { WeightComponent } from '../../Weight/weight/weight.component';
export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css'],
})
export class HomePatientComponent {
  asyncTabs: Observable<ExampleTab[]>;
  constructor(private matDialog: MatDialog) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Appointment', content: 'Content 1' },
          { label: 'Prescription', content: 'Content 2' },
        ]);
      }, 1000);
    });
  }
  openDailg() {
    this.matDialog.open(BmiComponent, {
      width: '800px',
      height: '500px',
    });
  }
  openDailg_2() {
    this.matDialog.open(HeartRateComponent, {
      width: '800px',
      height: '500px',
    });
  }
  openDailg_3() {
    this.matDialog.open(FbcComponent, {
      width: '800px',
      height: '600px',
    });
  }
  openDailg_4() {
    this.matDialog.open(WeightComponent, {
      width: '800px',
      height: '600px',
    });
  }
}
