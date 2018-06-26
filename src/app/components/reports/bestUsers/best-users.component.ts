import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {QueryService} from '../../../services/query.service';

import * as Chart from 'chart.js';


export interface BestUsers {
  userid: number;
  email: string;
  firstname: string;
  lastname: string;
  total: number;
}

@Component({
  selector: 'app-charts-users',
  templateUrl: './best-users.component.html',
  styleUrls: ['./best-users.component.css'],
  providers: [QueryService]
})
export class BestUsersComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() option: string;
  public users: BestUsers[] = [];
  public chartid: string;
  canvas: any;
  ctx: any;
  public title: string;
  public userSale: number[] = [];
  public userLabel: string[] = [];
  public myChart: any;
  public colors: string[] = [];

  constructor(private queryPro: QueryService) {}
  public getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  ngOnInit(): void {
    console.log("ngOnInit - Best Users report - " + this.option);
    this.title = this.option;
    this.chartid = this.option;
    console.log(this.getRandomColor());
    this.getReportBy(this.option);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - Best Users report" + this.option);
  }
  ngAfterViewInit(): void {}
  public getReportBy(s: string) {
    this.queryPro.getBestUsers(s).subscribe(
      userArr => {
        console.log(userArr);
        let len = userArr['length'];
        if (len === 0) {
          // hide the chart
          document.getElementById(this.chartid).style.display = 'none';
        } else {
          userArr.forEach( user => {
            this.users.push(user);
            this.userSale.push(user.total);
            this.userLabel.push(user.firstname + ' ' +  user.lastname);
            this.colors.push(this.getRandomColor());
          });
          console.log(this.users);
          console.log(this.userSale);
          console.log(this.userLabel);
          this.canvas = document.getElementById(this.chartid);
          this.ctx = this.canvas.getContext('2d');
          this.myChart = new Chart(this.ctx, {
            type: 'pie',
            data: {
              labels: this.userLabel,
              datasets: [
                {
                  label: this.title,
                  backgroundColor: this.colors,
                  data: this.userSale
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              legend: {
                position: 'bottom',
                labels: {
                  fontSize: 9
                }
              },
              title: {
                display: true,
                text: this.title
              },
              animation: {
                animateScale: true,
                animateRotate: true
              },
              scales: {
                pointLabels: {
                  fontSize: 5,
                }
              }
            }
          });
        }
      });
  }
}
