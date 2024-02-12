import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-patient-list',
  templateUrl: './doctor-patient-list.component.html',
  styleUrls: ['./doctor-patient-list.component.css'],
})
export class DoctorPatientListComponent {
  patientList: any[] = [];
  constructor() {
    this.patientList = [
      {
        id: 'P0016',
        name: 'Tichard Wilson',
        img: '../../../../../assets/image/Doctors/doctor-01.jpg',
        address: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: 38,
        blood: 'AB+',
      },
      {
        id: 'P0016',
        name: 'Tichard Wilson',
        img: '../../../../../assets/image/Doctors/doctor-01.jpg',
        address: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: 38,
        blood: 'AB+',
      },
      {
        id: 'P0016',
        name: 'Tichard Wilson',
        img: '../../../../../assets/image/Doctors/doctor-01.jpg',
        address: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: 38,
        blood: 'AB+',
      },
      {
        id: 'P0016',
        name: 'Tichard Wilson',
        img: '../../../../../assets/image/Doctors/doctor-01.jpg',
        address: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: 38,
        blood: 'AB+',
      },
      {
        id: 'P0016',
        name: 'Tichard Wilson',
        img: '../../../../../assets/image/Doctors/doctor-01.jpg',
        address: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: 38,
        blood: 'AB+',
      },
      {
        id: 'P0016',
        name: 'Tichard Wilson',
        img: '../../../../../assets/image/Doctors/doctor-01.jpg',
        address: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: 38,
        blood: 'AB+',
      },
      {
        id: 'P0016',
        name: 'Tichard Wilson',
        img: '../../../../../assets/image/Doctors/doctor-01.jpg',
        address: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: 38,
        blood: 'AB+',
      },
      {
        id: 'P0016',
        name: 'Tichard Wilson',
        img: '../../../../../assets/image/Doctors/doctor-01.jpg',
        address: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: 38,
        blood: 'AB+',
      },
      {
        id: 'P0016',
        name: 'Tichard Wilson',
        img: '../../../../../assets/image/Doctors/doctor-01.jpg',
        address: 'Alabama, USA',
        phone: '+1 952 001 8563',
        age: 38,
        blood: 'AB+',
      },
    ];
  }
}
