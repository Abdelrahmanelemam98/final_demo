import { Component, inject } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

export interface Services {
  name: string;
}
@Component({
  selector: 'app-doc-profile-settings',
  templateUrl: './doc-profile-settings.component.html',
  styleUrls: ['./doc-profile-settings.component.css'],
})
export class DocProfileSettingsComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  services: Services[] = [{ name: 'Dentist' }, { name: 'X-Ray' }];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.services.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Services): void {
    const index = this.services.indexOf(fruit);

    if (index >= 0) {
      this.services.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(services: Services, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(services);
      return;
    }

    // Edit existing fruit
    const index = this.services.indexOf(services);
    if (index >= 0) {
      this.services[index].name = value;
    }
  }
}
