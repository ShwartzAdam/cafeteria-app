import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {QueryService} from '../../../services/query.service';

import * as Chart from 'chart.js';
import {ActivatedRoute} from '@angular/router';


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
  public users: BestUsers[] = [];
  public chartid: string;
  canvas: any;
  ctx: any;
  public title: string;
  public userSale: number[] = [];
  public userLabel: string[] = [];
  public myChart: Chart;
  public colors: string[] = [];
  private sub: any;
  private option: string;
  public text = { month : 'Which users has spent the most this month ( New Shekels )',
    week: 'Which users has spent the most this week ( New Shekels )',
    day: 'Which users has spent the most today ( New Shekels )'
  };
  public headerText;

  constructor(private queryPro: QueryService,
              private route: ActivatedRoute) {}
  public getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  ngOnInit(): void {
    // console.log("ngOnInit - Best Users report - " + this.option);
    // this.title = this.option;
    // this.chartid = this.option;
    // console.log(this.getRandomColor());
    // this.getReportBy(this.option);
    this.sub = this.route.params.subscribe(params => {
      this.option = params['type']; // (+) converts string 'id' to a number;
      // In a real app: dispatch action to load the details here.
      if ( this.option === 'MonthBestUsers' ) {
        this.headerText = this.text.month;
        this.title = this.text.month;
      } else if ( this.option === 'WeekBestUsers' ) {
        this.headerText = this.text.week;
        this.title = this.text.week;
      } else {
        this.headerText = this.text.day;
        this.title = this.text.day;
      }
      this.chartid = this.option;
      this.getReportBy(this.option);
    });
  }
  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit - Best Users report" + this.option);
  }
  ngAfterViewInit(): void {}
  public getReportBy(s: string) {
    if (this.myChart) {
      // console.log('true');
      this.myChart.destroy();
      this.users = [];
      this.userSale = [];
      this.userLabel = [];
    }
    this.queryPro.getBestUsers(s).subscribe(
      userArr => {
        // console.log(userArr);
        const len = userArr['length'];
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
          // console.log(this.users);
          // console.log(this.userSale);
          // console.log(this.userLabel);
          this.canvas = document.getElementById(this.chartid);
          this.ctx = this.canvas.getContext('2d');
          this.myChart = new Chart(this.ctx, {
            type: 'pie',
            data: {
              labels: this.userLabel,
              datasets: [
                {
                  label: 'Which Users Spent The Most',
                  backgroundColor: this.colors,
                  data: this.userSale
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              legend: {
                position: 'top',
                labels: {
                  fontSize: 17
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
