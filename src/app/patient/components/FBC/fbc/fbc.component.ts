import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-fbc',
  templateUrl: './fbc.component.html',
  styleUrls: ['./fbc.component.css'],
})
export class FbcComponent {
  chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'FBC Status',
            data: [2.3, 3.1, 4, 10, 4, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        maintainAspectRatio: false,
      },
    });
  }
}
