import { Component } from '@angular/core';

@Component({
  selector: 'app-about-way',
  templateUrl: './about-way.component.html',
  styleUrls: ['./about-way.component.css'],
})
export class AboutWayComponent {
  Way: any[] = [];
  constructor() {
    this.Way = [
      {
        id: 1,
        title: 'Be On Your Way to Feeling Better with the Doccure',
        content:
          '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ];
  }
}
