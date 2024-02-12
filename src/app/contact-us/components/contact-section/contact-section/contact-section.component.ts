import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent {
  Contact: any[] = [];
  constructor() {
    this.Contact = [
      {
        Address: '8432 Mante Highway, Aminport, USA',
        phone: '+1 315 369 5943',
        email: 'doccure@example.com',
      },
    ];
  }
}
