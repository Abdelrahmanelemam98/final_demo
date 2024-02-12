import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent {
  allDoctor: any[] = [];

  constructor() {
    this.allDoctor = [
      {
        id: 1,
        img: '../../../../../../assets/image/Doctors/doctor-01.jpg',
        name: 'Darren Elder',
        specialities: 'BDS,MDW - Oral & Maxillofacial Surgery',
        feedback: 35,
        location: 'Newyork, USA',
        appointment: 'on Fri, 22 Mar',
        fezzeta: '$50-$300',
      },
      {
        id: 2,
        img: '../../../../../../assets/image/Doctors/doctor-02.jpg',
        name: 'Rubr Perrin',
        specialities: 'BDS,MDW - Oral & Maxillofacial Surgery',
        feedback: 35,
        location: 'Newyork, USA',
        appointment: 'on Fri, 22 Mar',
        fezzeta: '$50-$300',
      },
      {
        id: 3,
        img: '../../../../../../assets/image/Doctors/doctor-03.jpg',
        name: 'Deborah Angel',
        specialities: 'BDS,MDW - Oral & Maxillofacial Surgery',
        feedback: 35,
        location: 'Newyork, USA',
        appointment: 'on Fri, 22 Mar',
        fezzeta: '$50-$300',
      },
      {
        id: 4,
        img: '../../../../../../assets/image/Doctors/doctor-04.jpg',
        name: 'Sofia Brient',
        specialities: 'BDS,MDW - Oral & Maxillofacial Surgery',
        feedback: 35,
        location: 'Newyork, USA',
        appointment: 'on Fri, 22 Mar',
        fezzeta: '$50-$300',
      },
      {
        id: 5,
        img: '../../../../../../assets/image/Doctors/doctor-05.jpg',
        name: 'Marvin Campbell',
        specialities: 'BDS,MDW - Oral & Maxillofacial Surgery',
        feedback: 35,
        location: 'Newyork, USA',
        appointment: 'on Fri, 22 Mar',
        fezzeta: '$50-$300',
      },
      {
        id: 6,
        img: '../../../../../../assets/image/Doctors/doctor-06.jpg',
        name: 'Katharine Berthold',
        specialities: 'BDS,MDW - Oral & Maxillofacial Surgery',
        feedback: 35,
        location: 'Newyork, USA',
        appointment: 'on Fri, 22 Mar',
        fezzeta: '$50-$300',
      },
    ];
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['next', 'previous'],
    responsive: {
      0: {
        items: 1,
        stagePadding: 1000,
        // margin: 200,
        autoWidth: true,
      },
      400: {
        items: 2,
        margin: 200,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
}
