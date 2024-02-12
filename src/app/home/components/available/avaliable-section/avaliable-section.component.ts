import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-avaliable-section',
  templateUrl: './avaliable-section.component.html',
  styleUrls: ['./avaliable-section.component.css'],
})
export class AvaliableSectionComponent {
  Feature: any[] = [];
  constructor() {
    this.Feature = [
      {
        id: 1,
        img: '../../../../../assets/image/feature/feature-01.jpg',
        title: 'Patien Ward',
      },
      {
        id: 2,
        img: '../../../../../assets/image/feature/feature-02.jpg',
        title: 'Test Room',
      },
      {
        id: 3,
        img: '../../../../../assets/image/feature/feature-03.jpg',
        title: 'ICU',
      },
      {
        id: 4,
        img: '../../../../../assets/image/feature/feature-04.jpg',
        title: 'Laboratory',
      },
      {
        id: 5,
        img: '../../../../../assets/image/feature/feature-05.jpg',
        title: 'Operation',
      },
      {
        id: 6,
        img: '../../../../../assets/image/feature/feature-06.jpg',
        title: 'Medical',
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
