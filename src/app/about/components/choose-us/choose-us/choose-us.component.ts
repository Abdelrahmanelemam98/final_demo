import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css'],
})
export class ChooseUsComponent {
  Choose: any[] = [];
  constructor() {
    this.Choose = [
      {
        id: 1,
        img: '../../../../../assets/image/about/choose-01.svg',
        title: 'Qualified Staff of Doctors',
        content:
          ' Lorem ipsum sit amet consectetur incididunt ut labore etexercitation ullamco laboris nisi dolore magna enim veniamaliqua.',
      },
      {
        id: 2,
        img: '../../../../../assets/image/about/choose-02.svg',
        title: 'Qualified Staff of Doctors',
        content:
          ' Lorem ipsum sit amet consectetur incididunt ut labore etexercitation ullamco laboris nisi dolore magna enim veniamaliqua.',
      },
      {
        id: 3,
        img: '../../../../../assets/image/about/choose-03.svg',
        title: 'Qualified Staff of Doctors',
        content:
          ' Lorem ipsum sit amet consectetur incididunt ut labore etexercitation ullamco laboris nisi dolore magna enim veniamaliqua.',
      },
      {
        id: 4,
        img: '../../../../../assets/image/about/choose-04.svg',
        title: 'Qualified Staff of Doctors',
        content:
          ' Lorem ipsum sit amet consectetur incididunt ut labore etexercitation ullamco laboris nisi dolore magna enim veniamaliqua.',
      },
    ];
  }
}
