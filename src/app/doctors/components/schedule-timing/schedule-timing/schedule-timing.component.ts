import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AddScheduleTimeComponent } from '../../add-schedule-time/add-schedule-time.component';
import { MatDialog } from '@angular/material/dialog';
import { EditScheduleTimeComponent } from '../../edit-schedule-time/edit-schedule-time/edit-schedule-time.component';
export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-schedule-timing',
  templateUrl: './schedule-timing.component.html',
  styleUrls: ['./schedule-timing.component.css'],
})
export class ScheduleTimingComponent {
  asyncTabs: Observable<ExampleTab[]>;
  schedileTime: any[] = [];
  selectedIndex: number = 1;
  constructor(private dailog: MatDialog) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Saturday', content: 'Content 1' },
          { label: 'Sunday', content: 'Content 2' },
          { label: 'Monday', content: 'Content 3' },
          { label: 'Tuesday', content: 'Content 4' },
          { label: 'Wednesday	', content: 'Content 5' },
          { label: 'Thursday', content: 'Content 6' },
          { label: 'Friday	', content: 'Content 7' },
        ]);
      }, 1000);
    });
    this.schedileTime = [
      {
        satuday: '10:00am-8:00pm',
      },
      {
        sunday: '10:00am-8:00pm',
      },
      {
        monday: '10:00am-8:00pm',
      },
      {
        tuesday: '10:00am-8:00pm',
      },
      {
        wednesday: '10:00am-8:00pm',
      },
      {
        thursday: '10:00am-8:00pm',
      },
      {
        friday: '10:00am-8:00pm',
      },
    ];
  }
  addTime() {
    this.dailog.open(AddScheduleTimeComponent, {
      width: '400px',
      height: '400px',
    });
  }
  editTime() {
    this.dailog.open(EditScheduleTimeComponent, {
      width: '400px',
      height: '400px',
    });
  }
}
