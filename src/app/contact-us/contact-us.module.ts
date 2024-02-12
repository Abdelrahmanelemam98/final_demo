import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHeaderComponent } from './components/contact-header/contact-header/contact-header.component';
import { ContactSectionComponent } from './components/contact-section/contact-section/contact-section.component';
import { ContactMapComponent } from './components/contact-map/contact-map/contact-map.component';

@NgModule({
  declarations: [ContactHeaderComponent, ContactSectionComponent, ContactMapComponent],
  imports: [CommonModule],
})
export class ContactUsModule {}
