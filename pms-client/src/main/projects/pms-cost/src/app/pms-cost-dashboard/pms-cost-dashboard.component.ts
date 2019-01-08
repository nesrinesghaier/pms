import { Component, OnInit , AfterViewInit} from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'pms-cost-dashboard',
  templateUrl: './pms-cost-dashboard.component.html',
  styleUrls: ['./pms-cost-dashboard.component.css']
})
export class PmsCostDashboardComponent implements OnInit {

  constructor() { }
  canvas: any;
  ctx: any;
  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    // @ts-ignore
    const  myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['New', 'In Progress', 'In Progress', 'On Hold'],
        datasets: [{
          label: '# of Votes',
          data: [10, 20, 30,40,50, 60],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
      }
    });
  }
}

