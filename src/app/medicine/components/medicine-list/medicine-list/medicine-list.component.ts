import { Component } from '@angular/core';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
})
export class MedicineListComponent {
  medicine: any[] = [];
  constructor() {
    this.medicine = [
      {
        id: 1,
        name: 'Benzaxapine Croplex',
        price: 19,
        pricebefore: 45,
        img: '../../../../../assets/image/medicine/product.jpg',
      },
      {
        id: 2,
        name: 'Rapalac Neuronium',
        price: 19,
        pricebefore: 45,
        img: '../../../../../assets/image/medicine/product1.jpg',
      },
      {
        id: 3,
        name: 'Ombinazol Bonibamol',
        price: 19,
        pricebefore: 45,
        img: '../../../../../assets/image/medicine/product13.jpg',
      },
      {
        id: 4,
        name: 'Rapalac Neuronium',
        price: 19,
        pricebefore: 45,
        img: '../../../../../assets/image/medicine/product.jpg',
      },
      {
        id: 5,
        name: 'Ombinazol Bonibamol',
        price: 19,
        pricebefore: 45,
        img: '../../../../../assets/image/medicine/product1.jpg',
      },

      {
        id: 6,
        name: 'Rapalac Neuronium',
        price: 19,
        pricebefore: 45,
        img: '../../../../../assets/image/medicine/product13.jpg',
      },
    ];
  }
}
