import { Component } from '@angular/core';

@Component({
  selector: 'app-best-doctor',
  templateUrl: './best-doctor.component.html',
  styleUrls: ['./best-doctor.component.css'],
})
export class BestDoctorComponent {
  ProfessionalDoc: any[] = [];
  constructor() {
    this.ProfessionalDoc = [
      {
        id: 1,
        img: '../../../../../assets/image/Doctors/doctor-thumb-01.jpg',
        name: 'Dr . Ruby Perrin',
        specialsitie: 'Cardiology',
        location: 'Newyork,USA',
      },
      {
        id: 2,
        img: '../../../../../assets/image/Doctors/doctor-thumb-02.jpg',
        name: 'Dr. Darren Elder',
        specialsitie: 'Neurology',
        location: 'Florida, USA',
      },
      {
        id: 3,
        img: '../../../../../assets/image/Doctors/doctor-thumb-03.jpg',
        name: 'Dr. Sofia Brient',
        specialsitie: 'Urology',
        location: 'Georgia, USA',
      },
      {
        id: 4,
        img: '../../../../../assets/image/Doctors/doctor-thumb-04.jpg',
        name: 'Dr. Paul Richard',
        specialsitie: 'Orthopedic',
        location: 'Michigan, USA',
      },
    ];
  }
}
