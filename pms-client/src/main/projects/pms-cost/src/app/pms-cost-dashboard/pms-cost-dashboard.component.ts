import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../../../src/app/services/project.service';
import * as Chart from 'chart.js';
import {map} from 'rxjs/operators';

@Component({
  selector: 'pms-cost-dashboard',
  templateUrl: './pms-cost-dashboard.component.html',
  styleUrls: ['./pms-cost-dashboard.component.css']
})
export class PmsCostDashboardComponent implements OnInit {
  id: number;

  constructor(private  projectService: ProjectService) {
    this.id = parseInt(localStorage.getItem('id'), 0);

  }

  public result: number[] = [];

  canvas: any;
  ctx: any;

  ngOnInit() {
    this.projectService.getProjectBudget(this.id).subscribe(budgets => {
      console.log(budgets);
      budgets.forEach(budget => {
        this.result.push(budget.amount);
      });
      console.log(this.result);

      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');
      const myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday ', ' Sunday'],
          datasets: [{
            label: '# of Costs',
            data: this.result,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
            lineTension: 0.1,
          }]
        },
        options: {
          responsive: false,
        }
      });

    });

    //   this.projectService.getProjectBudget(this.id).pipe(map(result => result)).subscribe(projects => {
    //   console.log(projects);
    //
    // });


  }
}

