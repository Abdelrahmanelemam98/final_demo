import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineListComponent } from './components/medicine-list/medicine-list/medicine-list.component';
import { MedicineHeaderComponent } from './components/medicine-header/medicine-header/medicine-header.component';
import { MedicineDetailsComponent } from './components/medicine-details/medicine-details/medicine-details.component';



@NgModule({
  declarations: [
    MedicineListComponent,
    MedicineHeaderComponent,
    MedicineDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedicineModule { }
