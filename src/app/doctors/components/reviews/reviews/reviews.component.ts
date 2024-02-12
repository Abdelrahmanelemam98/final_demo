import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent {
  review: any[] = [];
  constructor() {
    this.review = [
      {
        id: 1,
        img: '../../../../../assets/image/Doctors/doctor-07.jpg',
        name: 'Richard Wilson',
        recoomand: 'recommanded',
        comment:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation. Curabitur nonnulla sit amet nisl tempus',
      },
      {
        id: 1,
        img: '../../../../../assets/image/Doctors/doctor-07.jpg',
        name: 'Richard Wilson',
        recoomand: 'recommanded',
        comment:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation. Curabitur nonnulla sit amet nisl tempus',
      },
      {
        id: 1,
        img: '../../../../../assets/image/Doctors/doctor-07.jpg',
        name: 'Richard Wilson',
        recoomand: 'recommanded',
        comment:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation. Curabitur nonnulla sit amet nisl tempus',
      },
      {
        id: 1,
        img: '../../../../../assets/image/Doctors/doctor-07.jpg',
        name: 'Richard Wilson',
        recoomand: 'recommanded',
        comment:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation. Curabitur nonnulla sit amet nisl tempus',
      },
    ];
  }
}
