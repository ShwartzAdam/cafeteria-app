/**
 * app charts items - show best selling items in the cafeteria
 * using chart js
 *
 */
import {Component, OnInit} from '@angular/core';
import {QueryService} from '../../../services/query.service';

import * as Chart from 'chart.js';
import {ActivatedRoute} from '@angular/router';

export interface BestItem {
  itemid: number;
  name: string;
  price: number;
  total: number;
}

@Component({
  selector: 'app-charts-items',
  templateUrl: './best-items.component.html',
  styleUrls: ['./best-items.component.css'],
  providers: [QueryService]
})
export class BestItemsComponent implements OnInit {
  private option: string;
  public items: BestItem[] = [];
  public chartid: string;

  canvas: any;
  ctx: any;
  public title: string;
  public itemSale: number[] = [];
  public itemLabels: string[] = [];
  public myChart: Chart;
  private sub: any;
  public text = { month : 'Which items have been sold in this month',
    week: 'Which items have been sold in this week',
    day: 'Which items have been sold today'
  };
  public headerText;

  constructor(private queryPro: QueryService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.option = params['type']; // (+) converts string 'id' to a number
      if ( this.option === 'MonthBestItems' ) {
        this.headerText = this.text.month;
        this.title = this.text.month;
      } else if ( this.option === 'WeekBestItems' ) {
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
  public getReportBy(s: string) {
    if (this.myChart) {
      // clean chart data
      this.myChart.destroy();
      this.items = [];
      this.itemSale = [];
      this.itemLabels = [];
    }
    // get best items arr
    this.queryPro.getBestItems(s).subscribe(
      itemArr => {
        const len = itemArr['length'];
        if (len === 0) {
          // hide the chart
          document.getElementById(this.chartid).style.display = 'none';
        } else {
          // init arr with values from server
          itemArr.forEach( it => {
            this.items.push(it);
            this.itemSale.push(it.total);
            this.itemLabels.push(it.name);
          });
          this.canvas = document.getElementById(this.chartid);
          this.ctx = this.canvas.getContext('2d');
          this.myChart = new Chart(this.ctx, {
            type: 'horizontalBar',
            data: {
              labels: this.itemLabels,
              datasets: [
                {
                  label: 'Amount of items',
                  backgroundColor: '#8e5ea2',
                  data: this.itemSale
                }
              ]
            },
            options: {
              scales: {
                xAxes: [{
                  ticks: {
                    fontSize: 20
                  }
                }]
              },
              title: {
                display: true,
                text: this.title
              }
            }
          });
        }
      });
  }


}
