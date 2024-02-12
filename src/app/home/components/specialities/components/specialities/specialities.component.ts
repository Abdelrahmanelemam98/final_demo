import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css'],
})
export class SpecialitiesComponent implements OnInit {
  Specialities: any[] = [];

  constructor() {
    this.Specialities = [
      {
        img: '../../../../../../assets/image/specialities/specialities-01.png',
        title: 'Urology',
      },
      {
        img: '../../../../../../assets/image/specialities/specialities-02.png',
        title: 'Neurology',
      },
      {
        img: '../../../../../../assets/image/specialities/specialities-03.png',
        title: 'Orthopedic',
      },
      {
        img: '../../../../../../assets/image/specialities/specialities-04.png',
        title: 'Cardiologist',
      },
      {
        img: '../../../../../../assets/image/specialities/specialities-05.png',
        title: 'Dentist',
      },

      {
        img: '../../../../../../assets/image/specialities/specialities-01.png',
        title: 'Urology',
      },
      {
        img: '../../../../../../assets/image/specialities/specialities-02.png',
        title: 'Neurology',
      },
      {
        img: '../../../../../../assets/image/specialities/specialities-03.png',
        title: 'Orthopedic',
      },
      {
        img: '../../../../../../assets/image/specialities/specialities-04.png',
        title: 'Cardiologist',
      },
      {
        img: '../../../../../../assets/image/specialities/specialities-05.png',
        title: 'Dentist',
      },
    ];
  }

  ngOnInit(): void {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
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
