import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDependentComponent } from '../../Edit-Dependent/edit-dependent/edit-dependent.component';
import { AddDependentComponent } from '../../Add-Dependent/add-dependent/add-dependent.component';
@Component({
  selector: 'app-dependent',
  templateUrl: './dependent.component.html',
  styleUrls: ['./dependent.component.css'],
})
export class DependentComponent {
  dependent: any[] = [];
  constructor(private matDialog: MatDialog) {
    this.dependent = [
      {
        id: 1,
        name: 'Christopher',
        relation: 'son',
        img: '../../../../../assets/image/patient16.jpg',
        gender: 'male',
        number: 3032976170,
        blood: 'AB+',
      },
      {
        id: 2,
        name: 'Tressie',
        relation: 'daughter',
        img: '../../../../../assets/image/patient17.jpg',
        gender: 'female',
        number: 3602976170,
        blood: 'B+',
      },
      {
        id: 3,
        name: 'Champagne',
        relation: 'father',
        img: '../../../../../assets/image/patient18.jpg',
        gender: 'male',
        number: 3032976170,
        blood: 'B+',
      },
      {
        id: 1,
        name: 'Vena',
        relation: 'mother',
        img: '../../../../../assets/image/patient19.jpg',
        gender: 'female',
        number: 3032976170,
        blood: 'A+',
      },
    ];
  }

  openDialg() {
    this.matDialog.open(EditDependentComponent, {
      width: '500px',
      height: '800px',
    });
  }
  openDialg_Add() {
    this.matDialog.open(AddDependentComponent, {
      width: '500px',
      height: '800px',
    });
  }
}
